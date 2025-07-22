import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { AddBook } from './components/add-book/add-book';
import { DeleteBook } from './components/delete-book/delete-book';
import { User } from './user';


@NgModule({
  declarations: [
    AddBook,
    DeleteBook,
    User
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
