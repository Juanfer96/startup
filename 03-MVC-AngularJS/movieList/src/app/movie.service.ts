import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Imovie } from './Interfaces/movieI';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'api/movies';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getMovies (): Observable<Imovie[]> {
    return this.http.get<Imovie[]>(this.moviesUrl)
    .pipe(
      catchError(this.handleError<Imovie[]>('getMovies', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getMovie(id: number): Observable<Imovie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Imovie>(url).pipe(
      catchError(this.handleError<Imovie>(`getMovie id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** PUT: update the hero on the server */
  updateMovie (movie: Imovie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateMovie'))
    );
  }
}