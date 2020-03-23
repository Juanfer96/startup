import { Component, OnInit } from '@angular/core';
import { Imovie }from '../../Interfaces/movieI'
import {MovieService} from '../../movie.service'
import { Location } from '@angular/common';



@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  movie :Imovie;
  constructor(
    private movieService : MovieService,
    private location: Location,) { }

  ngOnInit(): void {
  }

  add(title: string,duration :number,year: number): void {
    title = title.trim();
    if (!title) { return; }
      this.movie = {
         id: 0, title: title, year: year ,duration: duration
      }
      this.movieService.getMovies()
      .subscribe(movies => {
        this.movie.id=movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
        this.movieService.addMovie(this.movie)
        .subscribe(()=> this.goBack());
        
      })    
      
    } 
    
    goBack(): void {
      this.location.back();
    }

}
