import { Component, OnInit } from '@angular/core';
import { Imovie }from '../../Interfaces/movieI'
import {MovieService} from '../../movie.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {
  movie :Imovie;
  constructor(
    private movieService : MovieService,
    private location: Location,) { }

  ngOnInit(): void {
  }

  delete(id:number): void{
    this.movieService.getMovie(id)
    .subscribe(movie => this.movieService.deleteMovie(movie)
    .subscribe(() => this.goBack()))

  }
  goBack(): void {
    this.location.back();
  }
}
