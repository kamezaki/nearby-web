import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Logger } from './logging/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public afAuth: AngularFireAuth, private log: Logger) {  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider)
      .then(result => {
        this.log.info(result);
      })
      .catch(err => this.log.error(err));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
