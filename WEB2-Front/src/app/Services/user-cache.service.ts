import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserCacheService {

  public currentUser : User
  constructor() { }
}
