import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { Actions } from '@ngrx/effects';

import { State } from '../../reducers';
import { AuthUserActions, RouterActions } from '../../actions';
import { Logger } from '../../logging';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  onDestory = new Subject();

  constructor(private store: Store<State>, private actions$: Actions, private log: Logger) { }

  ngOnInit() {
    this.actions$.ofType(AuthUserActions.LOGIN_SUCCESS)
      .pipe(takeUntil(this.onDestory))
      .subscribe(user => {
        this.log.debug(user);
        this.store.dispatch(new RouterActions.Go({path: ['/']}));

      });
  }

  ngOnDestroy() {
    this.onDestory.next();
  }

  login() {
    this.store.dispatch(new AuthUserActions.Login());
  }

}
