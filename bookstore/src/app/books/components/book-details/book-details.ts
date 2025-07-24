import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: false,
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss'
})

export class BookDetails {
  constructor(private route: ActivatedRoute) {
    const bookId = this.route.snapshot.paramMap.get('id');
    //console.log(`Book ID: ${bookId}`);
    
    this.route.params.subscribe(params => {
      console.log(params);
    });

  }
}
