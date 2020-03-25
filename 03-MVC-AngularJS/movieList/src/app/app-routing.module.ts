import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieDeleteComponent } from './components/movie-delete/movie-delete.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'update', component: MovieUpdateComponent },
  { path: 'add', component: MovieAddComponent },
  { path: 'delete', component: MovieDeleteComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
