import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'jokes-form',
  template: `
      <article class="message is-primary">
        <div class="message-header">
          Enter joke bellow
        </div>
        <div class="message-body">
          <h2 class="subtitle">
            <div class="field">
              <label class="label">Title</label>
              <p class="control">
                <input #title class="input" type="text">
              </p>
            </div>
          </h2>
          <h2 class="subtitle">
            <div class="field">
              <label class="label">Content</label>
              <p class="control">
                <textarea #content class="textarea" placeholder=""></textarea>
              </p>
            </div>
          </h2>
          <a class="button is-primary" (click)="onJokeSubmit(title, content)">Submit</a>
        </div>
      </article>
  `,
  styles: []
})
export class JokesFormComponent implements OnInit {
  jokes: any[];
  @Output() refreshJokes: EventEmitter<String> = new EventEmitter();

  constructor(private http: Http) { }

  ngOnInit() { }

  onJokeSubmit(title, content) {
    this.sendToServer(title.value, content.value)
      .subscribe(res => {
        if (res.status === 200) { // if joke successfully submitted
          this.refreshJokes.emit('refresh jokes'); // refresh the list
        }
      });
    /* reset form values */
    title.value = '';
    content.value = '';
  }

  sendToServer(title, content) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000', { title, content }, options)
  }
}
