import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooks } from './components/all-books/all-books';
import { BookDetails } from './components/book-details/book-details';
import { PublicRoutingModule } from './books-routing-module';
import { Books } from './books';



@NgModule({
  declarations: [
    AllBooks,
    BookDetails,
    Books
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class BooksModule { }
