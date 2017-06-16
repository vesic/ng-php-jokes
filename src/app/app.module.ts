import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokesSidebarComponent } from './jokes-sidebar/jokes-sidebar.component';
import { JokesItemComponent } from './jokes-item/jokes-item.component';
import { JokesFormComponent } from './jokes-form/jokes-form.component';
import { HeaderComponent } from './header/header.component';

import { JokesServiceService } from './jokes-service'

@NgModule({
  declarations: [
    AppComponent,
    JokesSidebarComponent,
    JokesItemComponent,
    JokesFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JokesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
