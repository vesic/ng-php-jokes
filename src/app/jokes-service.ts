import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Joke } from './joke';

@Injectable()
export class JokesServiceService {

  constructor() { }

  getJokes(): Array<Joke> {
    return [
      { 
        title: 'Joke 1',
        content: 'Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish.'
      },
      {
        title: 'Joke 2',
        content: 'Put use set uncommonly announcing and travelling. Allowance sweetness direction to as necessary.'
      },
      {
        title: 'Joke 3',
        content: 'Principle oh explained excellent do my suspected conveying in. Excellent you did therefore perfectly supposing described'
      },
      {
        title: 'Joke 4',
        content: 'Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen'
      },
    ]
  }
}
