import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  standalone: false,
  templateUrl: './delete-book.html',
  styleUrl: './delete-book.scss'
})
export class DeleteBook {
  userId: string = '';

  constructor(private route: ActivatedRoute) {
    const bookId = this.route.snapshot.paramMap.get('id');
    //console.log(`Book ID: ${bookId}`);
    
    // Get params value from the parent component/route to child component
    this.route.parent?.params.subscribe(params => {
      console.log(params);
      this.userId = params['userId'];
    });

  }
}
