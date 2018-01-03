import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

import { State } from '../../reducers';
import { AuthUserActions } from '../../actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private onDestory = new Subject();

  constructor(private store: Store<State>) { }

  ngOnInit() {}

  ngOnDestroy() {
    this.onDestory.next();
  }

  login() {
    this.store.dispatch(new AuthUserActions.Login());
  }
}
