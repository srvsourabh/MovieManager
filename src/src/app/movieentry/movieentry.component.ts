import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieentry',
  templateUrl: './movieentry.component.html',
  styleUrls: ['./movieentry.component.css']
})
export class MovieentryComponent implements OnInit {

  constructor(private entryService: EntryService, private router: Router) {

  }

  ngOnInit() {
  }

  addMovie(f) {
    this.entryService.add(f.value);
  }
  
}
