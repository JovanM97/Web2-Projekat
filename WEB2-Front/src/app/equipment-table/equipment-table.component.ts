import { Component, OnInit, ViewChild } from '@angular/core';
import { EquipmentModel } from '../model/equipmentModel';
import { EquipmentService } from '../Services/equipment.service';
import { MatSort, MatSortable } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-equipment-table',
  templateUrl: './equipment-table.component.html',
  styleUrls: ['./equipment-table.component.css'],
  providers: [EquipmentService]
})
export class EquipmentTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'eqType', 'address', 'coordinates'];

  public Equipments = new Array<EquipmentModel>();
  sortedData = new Array<EquipmentModel>();
  filteredData = new Array<EquipmentModel>();
  dataSource = new MatTableDataSource<EquipmentModel>(this.sortedData);
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  filter(FType:string, FInput:string){
    console.log(FType + " is Type, and input is: " + FInput);
    this.filteredData = new Array<EquipmentModel>();
    if(FInput == ""){
      this.sortedData = this.Equipments.slice();
      this.dataSource = new MatTableDataSource<EquipmentModel>(this.sortedData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    if(FType == "NAME"){
      this.Equipments.forEach(element => {
        if(element.name.toLowerCase().includes(FInput.toLowerCase())){
          this.filteredData.push(element);
        }
      });
    } else if(FType == "TYPE"){
      this.Equipments.forEach(element => {
        if(element.eqType.toLowerCase().includes(FInput.toLowerCase())){
          this.filteredData.push(element);
        }
      });
    } else if(FType == "ADDRESS"){
      this.Equipments.forEach(element => {
        if(element.address.toLowerCase().includes(FInput.toLowerCase())){
          this.filteredData.push(element);
        }
      });
    }

      this.sortedData = this.filteredData;
      this.dataSource = new MatTableDataSource<EquipmentModel>(this.sortedData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.filteredData);
      console.log('filter Complete');
  }

  constructor(private service: EquipmentService, public dialog: MatDialog) {

    
    this.service.SpecifiedUrl = "Equipment/GetAllEquipment";
    this.service.getAll().subscribe(
      (data) => {
        this.Equipments = data;
        this.sortedData = this.Equipments.slice();
        this.dataSource = new MatTableDataSource<EquipmentModel>(this.sortedData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
        console.log("Successfuly retrieved data")
      },
      (error) => {
        console.log(error);
        console.log("Error while recieving equipment")
      },
      () => {
        console.log('complete');
      }
    );
   }

  ngOnInit(): void {
  }
}
