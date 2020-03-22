import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Imovie } from './movieI';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'api/movies';

  constructor(private http: HttpClient) { }

  getMovies (): Observable<Imovie[]> {
    return this.http.get<Imovie[]>(this.moviesUrl)
  }
}