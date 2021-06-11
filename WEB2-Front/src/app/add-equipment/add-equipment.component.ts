import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentModel } from '../model/equipmentModel';
import { EquipmentService } from '../Services/equipment.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css'],
  providers: [EquipmentService]
})
export class AddEquipmentComponent implements OnInit {

  equipmentForm : FormGroup;
  EqId : number = 10;
  type : string = "SW"
  name : string = this.type + this.EqId
  temp : EquipmentModel = new EquipmentModel;

  constructor(private service : EquipmentService, private router : Router, private activeRoute : ActivatedRoute) { }


  ngOnInit(): void {
    localStorage.setItem("headline", "Equipment-New");
    this.setForm();
    this.service.checkId().subscribe(
      (data) => {
        this.EqId = data;
        this.name = this.type + this.EqId;
      }
    );
  }

  setForm(){
    this.equipmentForm = new FormGroup({
      Type: new FormControl( Validators.required),
      Address: new FormControl('', [Validators.required]),
      Coordinates: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    this.temp.type = this.equipmentForm.value.Type;
    this.temp.id = this.EqId;
    this.temp.name = this.name;
    this.temp.address = this.equipmentForm.value.Address;
    this.temp.coordinates = this.equipmentForm.value.Coordinates;
    
    this.service.addEquipment(this.temp).subscribe(
      (data) => {
        if (data.token == "success"){
          console.log("Success");
          this.router.navigate(['equipment'])
        }
      },(error) =>
      {
        console.log(error);
       alert("Error adding equipment.")
      }
    );
  }
}
