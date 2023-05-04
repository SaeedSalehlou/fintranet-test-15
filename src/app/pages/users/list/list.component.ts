import { Component } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service';
import { BaseResponseModel } from 'src/app/domain/models/base-response.model';
import { UserModel } from 'src/app/domain/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  users!: UserModel[];


  constructor(private userService: UserService) { }

  ngOnInit() {
    let data: BaseResponseModel = this.userService.get();
    this.users = data.users;


  }
}


