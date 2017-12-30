import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';

import { Logger } from './logging/';
import { authUserReducer } from './reducers';
import { AuthUserActions } from './actions';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  private onDestory = new Subject();

  constructor(
    private store: Store<authUserReducer.State>,
    private authService: AuthService,
    private log: Logger
  ) {  }

  ngOnInit() {
    this.log.info('ngOnInit');
    this.authService.currentStatus$()
      .pipe(takeUntil(this.onDestory))
      .subscribe(user => {
        _.isNull(user) ?
          this.store.dispatch(new AuthUserActions.Delete()) :
          this.store.dispatch(new AuthUserActions.Update(user));
    });
  }

  ngOnDestroy() {
    this.onDestory.next();
  }

  // login() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider)
  //     .then(result => {
  //       this.log.info(result);
  //     })
  //     .catch(err => this.log.error(err));
  // }

  // logout() {
  //   this.afAuth.auth.signOut();
  // }
}
