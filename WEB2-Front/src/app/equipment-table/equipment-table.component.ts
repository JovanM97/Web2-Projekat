import { Component, OnInit } from '@angular/core';
import { EquipmentModel } from '../model/equipmentModel';
import { EquipmentService } from '../Services/equipment.service';

@Component({
  selector: 'app-equipment-table',
  templateUrl: './equipment-table.component.html',
  styleUrls: ['./equipment-table.component.css'],
  providers: [EquipmentService]
})
export class EquipmentTableComponent implements OnInit {

  public Equipments = new Array<EquipmentModel>();

  constructor(private service: EquipmentService) {

    this.service.SpecifiedUrl = "Equipment/GetAllEquipment";
    this.service.getAll().subscribe(
      (data) => {
        this.Equipments = data;
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
