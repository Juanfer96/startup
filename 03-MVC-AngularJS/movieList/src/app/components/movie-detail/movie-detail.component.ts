import { Component, Input } from '@angular/core';
import { Imovie } from '../../Interfaces/movieI';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent  {
  @Input() movie: Imovie;


  constructor() { }


}
