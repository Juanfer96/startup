import { Component, OnInit } from '@angular/core';
import { Imovie }from '../../Interfaces/movieI'
import {MovieService} from '../../movie.service'
import { Location } from '@angular/common';


@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {
  auxMovie : Imovie;

  constructor(
    private movieService : MovieService,
    private location: Location,
    ) { }
  
  ngOnInit(): void {
  }
  update(id: number, title: string,duration :number,year: number): void {
    title = title.trim();
    if (!id) { return; }
    //I verify its actually a movie with that Id
    this.movieService.getMovie(id)
    .subscribe(movie => {this.auxMovie=movie
      this.auxMovie.title =title;
      this.auxMovie.duration=duration;
      this.auxMovie.year=year; 
      this.movieService.updateMovie(this.auxMovie)
      .subscribe(() => this.goBack()); 
    }); 
    
  }

  goBack(): void {
    this.location.back();
  }

}
