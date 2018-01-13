import { Component, OnInit } from '@angular/core';
import { CurrentLocationService } from '../../services/index';
import { Logger } from '../../logging';

@Component({
  selector: 'app-location',
  providers: [ CurrentLocationService ],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(
    private currentLocationService: CurrentLocationService,
    private log: Logger
  ) { }

  ngOnInit() {
    this.currentLocationService.getLocation({})
      .subscribe(position => this.log.info(position));
  }

}
