import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { UserService } from 'src/app/core/services/user/user.service';
import { BaseResponseModel } from 'src/app/domain/models/base-response.model';
import { UserModel } from 'src/app/domain/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'gender', 'email', 'phone', 'birthDate', 'eyeColor'];


  dataSource = new MatTableDataSource();

  constructor(private userService: UserService) { }

  repos!: UserModel[];

  loading: boolean = false;
  errorMessage!: string;

  ngOnInit() {

    let data = this.userService.get()
      .subscribe(
        (response) => {
          this.repos = response.users as UserModel[];
          this.dataSource.data = this.repos;
        });
  }

  search(searchTerm: string) {
    this.dataSource.filter = searchTerm.trim().toLowerCase();

  }
}


