import { Injectable } from '@angular/core';
import { Font } from '../interfaces/font';

@Injectable()
export class FontActionService {
  public fonts: Array<Font> = [
    {
      'name': 'Arima Madurai',
      'href': 'Arima+Madurai:300,400,700',
      'family': '\'Arima Madurai\', cursive',
      'weight': '400'
    },
    {
      'name': 'Open Sans',
      'href': 'Open+Sans:400,600,700',
      'family': '\'Open Sans\',sans-serif,open-sans',
      'weight': '400'
    },
    {
      'name': 'Montserrat',
      'href': 'Montserrat:Montserrat:300,400,600,700',
      'family': '\'Montserrat\', sans-serif',
      'weight': '400'
    },
  ];
  constructor() { }

}
