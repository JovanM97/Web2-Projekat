import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from '../model/user';
import { UserCacheService } from './user-cache.service';
import { UserNetworkService } from './user-network.service';
import jwt_decode from 'jwt-decode'
import { TokenModel } from '../model/TokenModel';
import { LoginModel } from '../model/loginModel';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService extends UserNetworkService<LoginModel>{

  public UnregistredUser:EventEmitter<boolean> = new EventEmitter();
  public Admin:EventEmitter<boolean> = new EventEmitter();
  public AuthWorker:EventEmitter<boolean> = new EventEmitter();
  public CrewMember:EventEmitter<boolean> = new EventEmitter();
  public Dispatcher:EventEmitter<boolean> = new EventEmitter();

  Login(user: LoginModel)
  {
    return this.client.post<TokenModel>(this.BaseUri + this.SpecifiedUrl, user);
  }

  checkTheRole()
  {
    let flag=false;
    this.SpecifiedUrl="Account/checkToken"
     this.client.get(this.BaseUri + this.SpecifiedUrl).subscribe(
      (data) => {
       flag=data as boolean;
       this.emitRole(flag);
      },
      (error) => {
        console.log("greska")  
      },
      () => {
        console.log('complete');
      });
      return flag;
    }

    private emitRole(flag: boolean) {
      let role = localStorage.getItem('role');

        switch(role)
        {
        case 'ADMIN':
          this.UnregistredUser.emit(false);
          this.Admin.emit(true);
          this.AuthWorker.emit(false);
          this.CrewMember.emit(false);
          this.Dispatcher.emit(false);
          return;
        case 'ATH_WORKER':
          this.UnregistredUser.emit(false);
          this.Admin.emit(false);
          this.AuthWorker.emit(true);
          this.CrewMember.emit(false);
          this.Dispatcher.emit(false);
          return;
        case 'CREW_MEMEBER':
          this.UnregistredUser.emit(false);
          this.Admin.emit(false);
          this.AuthWorker.emit(false);
          this.CrewMember.emit(true);
          this.Dispatcher.emit(false);
            return;
          case 'DISPATCHER':
            this.UnregistredUser.emit(false);
            this.Admin.emit(false);
            this.AuthWorker.emit(false);
            this.CrewMember.emit(false);
            this.Dispatcher.emit(true);
            return;
        default:
          this.UnregistredUser.emit(true);
          this.Admin.emit(true);
          this.AuthWorker.emit(false);
          this.CrewMember.emit(false);
          this.Dispatcher.emit(false);
          return;
      }
    }
}
