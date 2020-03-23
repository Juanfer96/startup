import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  {path: 'update', component: MovieUpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
