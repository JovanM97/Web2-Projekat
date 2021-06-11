import { Injectable } from '@angular/core';
import { EquipmentModel } from '../model/equipmentModel';
import { TokenModel } from '../model/TokenModel';
import { UserNetworkService } from './user-network.service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService extends UserNetworkService<EquipmentModel>{
  
  checkId() {
    this.SpecifiedUrl="Equipment/CheckId";
    return this.client.get<number>(this.BaseUri + this.SpecifiedUrl);
  }
  
  
  addEquipment(equipment : EquipmentModel) {
    this.SpecifiedUrl="Equipment/AddEquipment";
    return this.client.post<TokenModel>(this.BaseUri + this.SpecifiedUrl, equipment);
  }
}
