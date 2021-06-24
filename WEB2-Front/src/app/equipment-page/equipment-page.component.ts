import { Component, OnInit } from '@angular/core';
import { EquipmentTableComponent } from '../equipment-table/equipment-table.component';

@Component({
  selector: 'app-equipment-page',
  templateUrl: './equipment-page.component.html',
  styleUrls: ['./equipment-page.component.css']
})
export class EquipmentPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("headline", "Equipment");
  }

}
