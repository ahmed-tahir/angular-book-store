import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AboutUs } from './about-us/about-us';
import { HowItWorks } from './how-it-works/how-it-works';
import { AuthModule } from './auth/auth-module';
import { UserModule } from './user/user-module';
import { PublicModule } from './public/public-module';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [
    App,
    AboutUs,
    HowItWorks
  ],
  imports: [
    BrowserModule,
    // AuthModule,
    // UserModule,
    // PublicModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
