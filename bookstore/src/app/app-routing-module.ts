import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUs } from './public-components/about-us/about-us';
import { HowItWorks } from './public-components/how-it-works/how-it-works';
import { NotFound } from './shared/components/not-found/not-found';
import { Auth } from './auth/auth';
import { User } from './user/user';
import { Books } from './books/books';
import { Home } from './public-components/home/home';

const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full'}, // Default route
  { path: 'about-us', component: AboutUs},
  { path: 'how-it-works', component: HowItWorks},
  // Lazy loading the Auth module
  { 
    path: 'auth', 
    component: Auth, 
    loadChildren:() => import('./auth/auth-module').then(m => m.AuthModule)
  },
  // Lazy loading the Books module
  { 
    path: 'books', 
    component: Books, 
    loadChildren:() => import('./books/books-module').then(m => m.BooksModule)
  },
  // Lazy loading the User module
  { 
    path: 'user/:userId', 
    component: User, 
    loadChildren:() => import('./user/user-module').then(m => m.UserModule)
  },
  //{path: '**', component: NotFound}, // Default route for handling 404 Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
