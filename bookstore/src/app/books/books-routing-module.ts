import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooks } from './components/all-books/all-books';
import { BookDetails } from './components/book-details/book-details';


const routes: Routes = [
  {path: '', component: AllBooks},
  {path: ':id', component: BookDetails}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
