import { Component } from '@angular/core';
import { Imovie }from '../../Interfaces/movieI'
import {MovieService} from '../../movie.service'
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent  {
  auxMovie : Imovie;
  checkoutForm ;

  constructor(
    private movieService : MovieService,
    private location :Location,
    private formBuilder: FormBuilder,
    private router : Router) {
      this.checkoutForm = this.formBuilder.group({
        id: 0,
        title: "",
        duration: "",
        year: "",
      });
     }
  
  
  onSubmit(movieData :Imovie){
    movieData.title = movieData.title.trim();
    if (!movieData.id) { return; }
    //I verify its actually a movie with that Id
    this.movieService.getMovie(movieData.id)
    .subscribe(movie => {this.auxMovie=movie
      this.auxMovie.title =movieData.title;
      this.auxMovie.duration=movieData.duration;
      this.auxMovie.year=movieData.year; 
      this.movieService.updateMovie(this.auxMovie)
      .subscribe(() => this.goBack()); 
    }); 
    
  }

  goBack(): void {
    this.router.navigateByUrl('/movies');
  }

}
