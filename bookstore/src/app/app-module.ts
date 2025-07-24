import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AboutUs } from './public-components/about-us/about-us';
import { HowItWorks } from './public-components/how-it-works/how-it-works';
import { AuthModule } from './auth/auth-module';
import { UserModule } from './user/user-module';
import { BooksModule } from './books/books-module';
import { SharedModule } from './shared/shared-module';
import { Home } from './public-components/home/home';

@NgModule({
  declarations: [
    App,
    AboutUs,
    HowItWorks,
    Home
  ],
  imports: [
    BrowserModule,
    // Lazy loaded modules
    // AuthModule,
    // UserModule,
    // BooksModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
