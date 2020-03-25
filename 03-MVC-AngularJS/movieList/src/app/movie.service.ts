import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Imovie } from './Interfaces/movieI';
import { Observable, of } from 'rxjs';
import { catchError,} from 'rxjs/operators';
import {InMemoryDataService} from './in-memory-data.service'


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'api/movies';

  constructor(
    private http: HttpClient,
    private db: InMemoryDataService
    ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getMovies (): Observable<Imovie[]> {
    return this.http.get<Imovie[]>(this.moviesUrl)
    .pipe(
      catchError(this.handleError<Imovie[]>('getMovies', []))
    );
  }

  getMovie(id: number): Observable<Imovie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Imovie>(url).pipe(
      catchError(this.handleError<Imovie>(`getMovie id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {  
      console.error(error); 
      return of(result as T);
    };
  }

  updateMovie (movie: Imovie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateMovie'))
    );
  }
  addMovie (movie: Imovie): Observable<any> {
    return this.http.post<Imovie>(this.moviesUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError<any>('addMovie'))
    );
  }

  deleteMovie (movie: Imovie | number): Observable<Imovie> {
  const id = typeof movie === 'number' ? movie : movie.id;
  const url = `${this.moviesUrl}/${id}`;

  return this.http.delete<Imovie>(url, this.httpOptions).pipe(
    catchError(this.handleError<Imovie>('deleteMovie'))
  );
}
}