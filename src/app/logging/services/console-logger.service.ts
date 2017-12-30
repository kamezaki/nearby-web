import { Injectable } from '@angular/core';

import { Logger } from './logger.service';
import { environment } from '../../../environments/environment';

const noop = (): any => undefined;

@Injectable()
export class ConsoleLoggerService implements Logger {

  get debug() {
    if (!environment.production) {
      return console.debug.bind(console);

    }
    return noop;
  }

  get info() {
    if (!environment.production) {
      return console.info.bind(console);
    }
    return noop;
  }

  get warn() {
    if (!environment.production) {
      return console.warn.bind(console);
    }
    return noop;
  }

  get error() {
    if (!environment.production) {
      return console.error.bind(console);
    }
    return noop;
  }

}
