import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ViewChild,
  ElementRef,
  NgZone
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

import { State, locationReducer } from '../../reducers';
import { LocationActions } from '../../actions';
import { Location } from '../../models';
import { Logger } from '../../logging';
import { logging } from 'selenium-webdriver';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  private onDestory = new Subject();
  private searchControl: FormControl;

  @Input()
  location: Location;

  @ViewChild('search')
  searchElementRef: ElementRef;

  constructor(
    private store: Store<State>,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private log: Logger
  ) { }

  ngOnInit() {
    // create search FormControl
    this.searchControl = new FormControl();

    this.store.select(locationReducer.getLocation)
      .pipe(takeUntil(this.onDestory))
      .subscribe(location => this.log.info(location));
    this.store.dispatch(new LocationActions.Current());

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {});
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // set latitude, longitude and zoom
          const location: Location = {
            latitude: place.geometry.location.lat(),
            longtitude: place.geometry.location.lng()
          };
          this.store.dispatch(new LocationActions.Update(location));
        });
      });
    });
  }

  ngOnDestroy() {
    this.onDestory.next();
  }

}
