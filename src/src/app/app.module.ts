import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MovieentryComponent } from './movieentry/movieentry.component';
import { HomeComponent } from './home/home.component';
import { routingModule } from './app.routing';
import { EntryService } from './entry.service';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieentryComponent,
    HomeComponent,
    ViewmoviesComponent,
  ],
  imports: [
    BrowserModule,
    routingModule,
    FormsModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
