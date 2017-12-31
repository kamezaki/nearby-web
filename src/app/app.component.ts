import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
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

  private onDestory = new Subject();

  constructor(
    private store: Store<State>,
    private authService: AuthService,
    private log: Logger
  ) {  }

  ngOnInit() {
    this.log.info('ngOnInit');
    this.authService.currentStatus$()
      .pipe(takeUntil(this.onDestory))
      .subscribe(user => {
        this.log.error(user);
        if (user) { this.store.dispatch(new AuthUserActions.Update(user)); }
      });
    //     user ?
    //       this.store.dispatch(new AuthUserActions.Update(user)) :
    //       this.store.dispatch(new )
    // });
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
