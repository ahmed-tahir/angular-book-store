import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Public } from './public';
import { AllBooks } from './components/all-books/all-books';
import { BookDetails } from './components/book-details/book-details';


const routes: Routes = [
  {
    path: 'public', 
    component: Public, 
    children: [
      {path: '', redirectTo: 'all-books', pathMatch: 'full'}, // Default route for public
      {path: 'all-books', component: AllBooks},
      {path: 'book-details/:id/author/:authorId', component: BookDetails}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
