import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User, UserType } from '../model/user';
import { TokenModel } from '../model/TokenModel';


@Injectable({
  providedIn: 'root'
})
export class UserNetworkService<T> {

  BaseUri : string = 'https://localhost:44358/api/';
  SpecifiedUrl = "";
  constructor(protected client : HttpClient) { }

  getAll(): Observable<T[]> {
    return this.client.get<T[]>(this.BaseUri + this.SpecifiedUrl);
  }

  get(): Observable<T> {
    return this.client.get<T>(this.BaseUri + this.SpecifiedUrl);
  }

  getById(id: number): Observable<T> {
    return this.client.get<T>(this.BaseUri + this.SpecifiedUrl + '/${id}');
  }

  put(id: number, inputData: T) {
    return this.client.put(this.BaseUri + this.SpecifiedUrl + '/${id}', inputData);
  }

  post(inputData: any): Observable<T> {
    return this.client.post<T>(this.BaseUri + this.SpecifiedUrl, inputData);
  }

  delete(id: number) {
    return this.client.delete(this.BaseUri + this.SpecifiedUrl + '/${id}');
  }

}
