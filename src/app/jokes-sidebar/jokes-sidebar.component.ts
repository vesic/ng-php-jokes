import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { JokesServiceService } from '../jokes-service';
import { Joke } from "../joke";
import { Http } from '@angular/http';

@Component({
  selector: 'jokes-sidebar',
  template: `
    <div class="box">
      <p class="menu-label">
        All Jokes
      </p>
      <ul class="menu-list">
        <li><a *ngFor="let joke of jokes" (click)="selectJoke(joke)">{{joke.title}}</a></li>
      </ul>
    </div>
  `,
  styles: [`
    .box {
      margin-left: 10%;
    }
  `]
})
export class JokesSidebarComponent implements OnInit {
  @Input() jokes = <any>[];
  @Output() ee: EventEmitter<Joke> = new EventEmitter<Joke>();

  constructor(
    private _jokesSerive: JokesServiceService,
    private http: Http
  ) { }

  ngOnInit() {
  }

  selectJoke(joke: Joke) {
    console.log(joke);
    this.ee.emit(joke)
  }
}
