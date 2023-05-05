import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersMockData } from 'src/app/domain/mockData/users-mock-data';
import { UserModel } from 'src/app/domain/models/user.model';
import { BaseResponseModel } from 'src/app/domain/models/base-response.model';
import { Observable, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.baseUrl + '/users')
  }

  get2() {
    return this.http.get<BaseResponseModel>(this.baseUrl + '/users')
      .subscribe(
        (data: BaseResponseModel) => {
          return JSON.stringify(data);
        })
  }
}
