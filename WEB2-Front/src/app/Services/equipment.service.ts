import { Injectable } from '@angular/core';
import { EquipmentModel } from '../model/equipmentModel';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  
  
  addEquipment(equipment : EquipmentModel) : EquipmentModel {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
