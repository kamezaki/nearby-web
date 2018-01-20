import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil, filter } from 'rxjs/operators';
import * as _ from 'lodash';

import { State, locationReducer } from '../../reducers';
import { Location } from '../../models';
import { Logger } from '../../logging';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  private onDestory = new Subject();

  private location: Location;
  private zoom = 4;

  constructor(
    private store: Store<State>,
    private log: Logger
  ) { }

  ngOnInit() {
    this.store.select(locationReducer.getLocation)
      .pipe(takeUntil(this.onDestory))
      .subscribe(location => {
        this.location = location;
        if (this.zoom < 8) {
          this.zoom = 12;
        }
      });
  }

  ngOnDestroy() {
    this.onDestory.next();
  }

}
