import { Component, OnInit, ViewChild } from '@angular/core';
import { EquipmentModel } from '../model/equipmentModel';
import { EquipmentService } from '../Services/equipment.service';
import { MatSort, MatSortable } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


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
  dataSource = new MatTableDataSource<EquipmentModel>(this.sortedData);
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private service: EquipmentService) {

    
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
