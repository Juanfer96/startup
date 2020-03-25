import { Component } from '@angular/core';
import { Imovie }from '../../Interfaces/movieI'
import {MovieService} from '../../movie.service'
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent  {
  movie :Imovie;
  checkoutForm ;
  constructor(
    private movieService : MovieService,
    private location: Location,
    private formBuilder: FormBuilder,
    private router :Router) {
      this.checkoutForm = this.formBuilder.group({
        id: 0,
      });
    }

  onSubmit(movieData :Imovie){
    this.movieService.getMovie(movieData.id)
    .subscribe(movie => this.movieService.deleteMovie(movie)
    .subscribe(() => this.goBack()))

  }
  goBack(): void {
    this.router.navigateByUrl('/movies');
  }
}
