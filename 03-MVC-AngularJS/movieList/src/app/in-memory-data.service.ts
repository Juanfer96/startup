import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Imovie } from './Interfaces/movieI';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 1, title: 'Parásitos', year: 2019 ,duration: 132},
      { id: 2, title: 'Interestelar', year: 2014 ,duration: 169},
      { id: 3, title: 'El rey león', year: 1994 ,duration: 89},
      { id: 4, title: 'Gladiador', year: 2000 ,duration: 171},
      { id: 5, title: 'Braveheart', year: 1995 ,duration: 182},
      { id: 6, title: 'Fight Club', year: 1999 ,duration: 151},
      { id: 7, title: 'El pianista', year: 2002 ,duration: 150},
      { id: 8, title: 'Pulp Fiction', year: 1994 ,duration: 178},
    ];
    return {movies};
  }

 
  genId(movies: Imovie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1;
  }
}
