import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';

import { Logger } from './logging/';
import { State } from './reducers';
import { AuthUserActions, RouterActions } from './actions';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  private isLogin$: Observable<boolean>;
  private onDestory = new Subject();

  constructor(
    private store: Store<State>,
    private authService: AuthService,
    private log: Logger
  ) {  }

  ngOnInit() {
    this.authService.currentStatus$()
      .pipe(takeUntil(this.onDestory))
      .subscribe(user => {
        if (user) {
          this.store.dispatch(new AuthUserActions.Update(user));
        }
      });
    this.isLogin$ = this.authService.currentStatus$()
      .map(user => !_.isNil(user));
   }

  ngOnDestroy() {
    this.onDestory.next();
  }
}
