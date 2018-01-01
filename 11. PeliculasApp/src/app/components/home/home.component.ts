import { Component } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { Film } from '../../interfaces/film.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent   {
  popularFilms: Film[];
  theaterFilms: Film[];
  popularKidsFilms: Film[];

  constructor(private _ps: PeliculasService) {

    this._ps.getPopulares().subscribe(res => {
      this.popularFilms = [];
      for ( const film  of res.results )
      {
        this.popularFilms.push(film);
      }
      });
      this._ps.getTheater().subscribe(res => {
        this.theaterFilms = [];
        for ( const film  of res.results )
        {
          this.theaterFilms.push(film);
        }
        });
      this._ps.getPopularKidsFilms().subscribe(res => {
        this.popularKidsFilms = [];
        for ( const film  of res.results )
        {
          this.popularKidsFilms.push(film);
        }
        });
  }



}
