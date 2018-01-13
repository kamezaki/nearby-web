import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

import { State, locationReducer } from '../../reducers';
import { LocationActions } from '../../actions';
import { Logger } from '../../logging';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  private onDestory = new Subject();

  constructor(
    private store: Store<State>,
    private log: Logger
  ) { }

  ngOnInit() {
    this.store.select(locationReducer.getLocation)
      .pipe(takeUntil(this.onDestory))
      .subscribe(location => this.log.info(location));
    this.store.dispatch(new LocationActions.Current());
  }

  ngOnDestroy() {
    this.onDestory.next();
  }

}
