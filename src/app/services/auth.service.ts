import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';

import { Logger } from '../logging';
import { AuthUser } from '../models';

const STORAGE_LOGIN_KEY = 'login';

@Injectable()
export class AuthService {
  private auth: firebase.auth.Auth;

  constructor(private fireAuth: AngularFireAuth, private log: Logger) {
  }

  currentStatus$(): Observable<AuthUser | null> {
    return this.fireAuth.authState
      .map(state => {
        if (!state) { return null; }
        const user: AuthUser = JSON.parse(localStorage.getItem(STORAGE_LOGIN_KEY));
        if (!user || !_.has(user, 'id') || !_.isEqual(state.uid, user.id)) {
          localStorage.removeItem(STORAGE_LOGIN_KEY);
          return null;
        }
        this.log.info(user);

        return user;
      });
  }

  login() {
    this.fireAuth.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
  }

  loginResult$(): Observable<AuthUser | null> {
    const promise = this.fireAuth.auth.getRedirectResult()
      .then(result => {
        const user: AuthUser = {
          id: result.user.uid,
          name: result.user.displayName,
          twitterToken: result.credential.accessToken,
          twitterSecret: result.credential.secret
        };
        localStorage.setItem(STORAGE_LOGIN_KEY, JSON.stringify(user));
        return user;
      });
      return Observable.fromPromise(promise);
  }

}
