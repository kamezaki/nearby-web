import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { effects } from './effects';
import { reducers } from './reducers';

import { AppComponent } from './app.component';
import { Logger, ConsoleLoggerService } from './logging/';
import {
  AuthService
} from './services';

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
    StoreModule.forRoot(Object.assign({}, reducers, { routerReducer: routerReducer })),
    EffectsModule.forRoot(effects),
    AppRoutingModule,
    StoreRouterConnectingModule
  ],
  providers: [
    { provide: Logger, useClass: ConsoleLoggerService },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
