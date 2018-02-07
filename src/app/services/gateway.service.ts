import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { SearchQuery, RadiusType } from '../models';
import { Logger } from '../logging';

@Injectable()
export class GatewayService {

  constructor(private http: HttpClient, private log: Logger) { }

  public search$(opt: SearchQuery) {
    const searchUri = '/v1/search';
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'x-www-form-urlencoded'})
    };
    const query = {
      'lat': opt.lat,
      'long': opt.long,
      'radius': opt.radius + (opt.radiusType == RadiusType.KM ? 'km' : 'mi')
    }
    this.http.post(this.getUrl(searchUri), query, options).subscribe(data => this.log.info(data));

  }

  getUrl(uri: string): string {
    return `${environment.gateway.host}/${uri}`;
  }

}
