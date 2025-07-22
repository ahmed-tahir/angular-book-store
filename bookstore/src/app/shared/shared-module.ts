import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFound } from './components/not-found/not-found';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NotFound
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
