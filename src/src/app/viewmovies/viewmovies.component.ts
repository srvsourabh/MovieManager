import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-viewmovies',
  templateUrl: './viewmovies.component.html',
  styleUrls: ['./viewmovies.component.css']
})
export class ViewmoviesComponent implements OnInit {


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
