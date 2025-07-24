import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';

const routes: Routes = [
  // {
  //   path: 'auth', 
  //   component: Auth, 
  //   children:[
  //   { path: 'login', component: Login},
  //   { path: 'signup', component: SignUp},
  //   ]
  // }

  { path: 'login', component: Login},
  { path: 'signup', component: SignUp},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
