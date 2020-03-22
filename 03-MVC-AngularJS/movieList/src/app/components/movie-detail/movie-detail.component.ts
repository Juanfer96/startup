import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from '../../Interfaces/movieI';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Imovie;


  constructor() { }

  ngOnInit(): void {
  }

}
