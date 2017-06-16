import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'jokes-item',
  template: `
    <article class="message is-primary">
      <div class="message-header">
        <p>Select one from the left to display</p>
      </div>
      <div class="message-body">
        <div *ngIf="!joke.title">No Joke Selected</div>
        <div *ngIf="joke.title" class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{joke.title}}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              {{joke.content}}
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">upvote</a>
            <a class="card-footer-item">downvote</a>
          </footer>
        </div>
      </div>
    </article>
  `,
  styles: [`
    article { margin-bottom: 10%; }
  `]
})
export class JokesItemComponent implements OnInit {
  @Input() joke;

  constructor() { }

  ngOnInit() {
  }

}
