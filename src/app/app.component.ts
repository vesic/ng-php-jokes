import { Component, OnInit } from '@angular/core';
import { Joke } from './joke';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jokes = <any>[];
  joke: Joke = {}

  constructor(private http: Http) {}

  ngOnInit() {
    this.loadJokes();
  }

  setJoke(joke: Joke) {
    this.joke = joke;
  }

  onRefreshJokes() {
    this.loadJokes(); // refresh on submit
  }

  loadJokes() {
    this.http.get('http://localhost:8000')
      .map(res => res.json())
      .subscribe(res => {
        this.jokes = res.data; // set jokes from api
      })
  }
}
