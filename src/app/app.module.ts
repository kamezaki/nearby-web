import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { effects } from './effects';
import { reducers } from './reducers';

import { AppComponent } from './app.component';
import { Logger, ConsoleLoggerService } from './logging/';
import { SERVICE_PROVIDERS } from './services';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { LocationComponent } from './components/location/location.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    LocationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    AgmCoreModule.forRoot({
      apiKey: environment.firebase.apiKey,
      libraries: ['places']
    }),
    AppRoutingModule,
    StoreRouterConnectingModule
  ],
  providers: [
    { provide: Logger, useClass: ConsoleLoggerService },
    ...SERVICE_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
