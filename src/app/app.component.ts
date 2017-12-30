import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
import { Store } from '@ngrx/store';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';

import { authUserReducer } from './reducers/';
import { Logger } from './logging/';
import { RouterActions } from './actions/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private store: Store<authUserReducer.State>,
    private log: Logger
  ) {  }

  ngOnInit() {
    this.log.info('ngOnInit');
    this.store.select(authUserReducer.getUser)
      .subscribe(user => {
        if (_.isNull(user) || _.isUndefined(user)) {
          this.store.dispatch(new RouterActions.Go({ path: ['/login'] }));
        } else {
          this.log.info(user);
        }
      });

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
