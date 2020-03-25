import { Component } from '@angular/core';
import { Imovie }from '../../Interfaces/movieI'
import {MovieService} from '../../movie.service'
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent {
  movie :Imovie;
  checkoutForm ;
  constructor(
    private movieService : MovieService,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router) {
      this.checkoutForm = this.formBuilder.group({
        id: 0,
        title: "",
        duration: "",
        year: "",
      });
     }

  onSubmit(movieData : Imovie){
    movieData.title = movieData.title.trim();
    if (!movieData.title) { return; }
      this.movieService.getMovies()
      .subscribe(movies => {
        movieData.id=movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
        this.movieService.addMovie(movieData)
        .subscribe(()=> this.goBack()); 
      })    
      
    } 
    
    goBack(): void {
      this.router.navigateByUrl('/movies');
    }

}
