import { Component } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent {
  film: Film;
  origen: string;
  termino: string;
  constructor(private actRoute: ActivatedRoute, private _ps: PeliculasService) {
    this.actRoute.params.map(
                              parametros => parametros
                            ).subscribe(p => {
                                    this._ps.getFilmDetail(p.id).subscribe(retFilm => {
                                      this.film = retFilm;
                                    }
                                  );
                                  this.origen = p.origen;
                                  this.termino = p.termino;
                            }
                );
   }
}
