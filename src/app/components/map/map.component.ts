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

  private zoom = 4;
  private latitude: number;
  private longitude: number;

  constructor(
    private store: Store<State>,
    private log: Logger
  ) { }

  ngOnInit() {
    this.store.select(locationReducer.getLocation)
      .pipe(takeUntil(this.onDestory))
      .subscribe(location => {
        this.longitude = location.longitude;
        this.latitude = location.latitude;
        if (this.zoom < 12) {
          this.zoom = 14;
        }
      });
  }

  ngOnDestroy() {
    this.onDestory.next();
  }

  onZoomChange(z: number): void {
    this.zoom = z;
  }

}
