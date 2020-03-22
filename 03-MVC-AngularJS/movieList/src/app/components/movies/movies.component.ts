import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../Interfaces/movieI';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies : Imovie[]
  selectedMovie : Imovie;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }

  onSelect(movie: Imovie): void {
    this.selectedMovie = movie;
  }

}
