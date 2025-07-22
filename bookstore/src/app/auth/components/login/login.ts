import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor(private route: ActivatedRoute, private router: Router) {
    const bookId = this.route.snapshot.paramMap.get('id');
    //console.log(`Book ID: ${bookId}`);
    
    // Get query string value from the parent component/route to child component
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });

  }

  goToSignUp(): void {
    // Navigate to the signup page
    this.router.navigate(['/auth/signup']);
  }
  goToBookDetails(): void {
    // Navigate to the book details page with parameters
    this.router.navigate(['/public/book-details', 1, 'author', 10],
      {
        queryParams: { name: 'tahir', id: 100 }
      });
  }
}
