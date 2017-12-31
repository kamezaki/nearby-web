import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { effects } from './effects';
import { reducers } from './reducers';

import { AppComponent } from './app.component';
import { Logger, ConsoleLoggerService } from './logging/';
import { AuthService } from './services';
import { Guards } from './guards';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    AppRoutingModule,
    StoreRouterConnectingModule
  ],
  providers: [
    { provide: Logger, useClass: ConsoleLoggerService },
    AuthService,
    ...Guards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
