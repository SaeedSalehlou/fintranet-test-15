import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usersMockData } from 'src/app/domain/mockData/users-mock-data';
import { UserModel } from 'src/app/domain/models/user.model';
import { BaseResponseModel } from 'src/app/domain/models/base-response.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private url = 'https://dummyjson.com';

  constructor() { }

  get() {
    let m = usersMockData;
    return m;
  }

}
