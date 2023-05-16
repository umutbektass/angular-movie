import { Component } from '@angular/core';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movies :Movie[];
  selectedMovie: Movie;

  onSelect(movie: Movie) {
    this.selectedMovie = movie;
  }
  }


