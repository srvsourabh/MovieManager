import { Injectable } from '@angular/core';

@Injectable()
export class EntryService {
    movies=[];
    constructor() { }

    getMovies() {
        return this.movies;
    }

    add(f) { 
        let item1 = this.movies.find(i => i === f);
        
        if(item1){
            alert("Entered Movie and release information has already been entered..!!");
        }else{
            return this.movies.push(f); 
        }
            
    }
    

    removeMovie(i) {
        return this.movies.splice(i,1);
    }
 
}
