import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  standalone: false,
  templateUrl: './public.html',
  styleUrl: './public.scss'
})
export class Public {
  bookID: number = 1;
  authorID: number = 10;

  constructor(private route: ActivatedRoute) {
    const bookId = this.route.snapshot.paramMap.get('id');
    //console.log(`Book ID: ${bookId}`);
    
    // get params value from child component/route to parent component
    this.route.firstChild?.params.subscribe(params => {
      console.log(params);
    });

  }
}
