import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Logger, ConsoleLoggerService } from './logging/';

import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    StoreModule.forRoot({ routerReducer: routerReducer }),
    AppRoutingModule,
    StoreRouterConnectingModule
  ],
  providers: [
    { provide: Logger, useClass: ConsoleLoggerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
