import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from './user';
import { AddBook } from './components/add-book/add-book';
import { DeleteBook } from './components/delete-book/delete-book';

const routes: Routes = [
  // {
  //   path: 'user/:userId', 
  //   component: User, 
  //   children: [
  //     {path: 'add-book', component: AddBook},
  //     {path: 'delete-book', component: DeleteBook}
  //   ]
  // }

  {path: 'add-book', component: AddBook},
  {path: 'delete-book', component: DeleteBook}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
