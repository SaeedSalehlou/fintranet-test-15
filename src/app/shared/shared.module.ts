import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialApisModule } from './material-apis/material-apis.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialApisModule
  ],
  exports: [
    MaterialApisModule
  ]
})
export class SharedModule { }
