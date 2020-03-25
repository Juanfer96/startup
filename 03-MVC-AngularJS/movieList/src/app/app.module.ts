import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { TimePipe } from '../app/pipes/timePipe';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MovieDeleteComponent } from './components/movie-delete/movie-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    TimePipe,
    TopBarComponent,
    MovieUpdateComponent,
    MovieAddComponent,
    MovieDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
