import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import * as _ from 'lodash';

import { AuthUser } from '../models';

@Injectable()
export class AuthService {
  private auth: firebase.auth.Auth;

  constructor(private fireAuth: AngularFireAuth) {
  }

  currentStatus$(): Observable<AuthUser | null> {
    return this.fireAuth.authState
      .map(state => {
        if (_.isNull(state)) {
          return null;
        }
        return <AuthUser> {
          name: state.displayName,
        };
      });
  }

}
