import { Component, OnInit } from '@angular/core';
import { EntryService } from '.././entry.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists: string[];
  constructor(private entryService: EntryService) {
    this.lists = this.entryService.getMovies();
   }

  ngOnInit() {
  }

  removeMovie(index) {
    this.entryService.removeMovie(index);
  }

}
