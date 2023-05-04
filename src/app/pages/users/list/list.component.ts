import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/core/services/user/user.service';
import { BaseResponseModel } from 'src/app/domain/models/base-response.model';
import { UserModel } from 'src/app/domain/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  displayedColumns: string[] =
    [
      'firstName',
      'lastName',
      'age',
      'gender',
      'email',
      'phone',
      'birthDate',
      'eyeColor'
    ];

  dataSource!: UserModel[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    let data = this.userService.get();
    // this.dataSource = data.users;

  }
}


