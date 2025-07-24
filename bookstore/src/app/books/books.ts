import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.scss'
})
export class Books {

  constructor(private route: ActivatedRoute) {

  }
}
