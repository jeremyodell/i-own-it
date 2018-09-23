import { Injectable } from '@angular/core';
import { Settings } from './app.settings.model';

@Injectable()
export class AppSettings {
  public settings = new Settings(
    'I Own It', // name
    'IOI', // short Name
    true, // loadingSpinner
    true, // fixedHeader
    'blue-dark', // indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
    '../assets/img/app/white-logo.svg',
  );
}
