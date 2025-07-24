import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFound } from './components/not-found/not-found';
import { RouterModule } from '@angular/router';
import { Toolbar } from './components/toolbar/toolbar';
import { MaterialModule } from './material-module';
import { Footer } from './components/footer/footer';



@NgModule({
  declarations: [
    NotFound,
    Toolbar,
    Footer
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    Toolbar,
    Footer
  ]
})
export class SharedModule { }
