import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';
import { ChangePassword } from './components/change-password/change-password';
import { Auth } from './auth';
import { AppRoutingModule } from "../app-routing-module";
import { RouterModule } from '@angular/router';
import { AuthRoutingModule} from './auth-routing-module';



@NgModule({
  declarations: [
    Login,
    SignUp,
    ChangePassword,
    Auth
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    AuthRoutingModule
]
})
export class AuthModule { }
