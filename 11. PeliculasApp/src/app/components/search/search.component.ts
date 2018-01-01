import { Component } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  txtSearch: string;
  films: Film[];
  constructor(private _ps: PeliculasService, private actRoute: ActivatedRoute) {
    this.actRoute.params.map(
      parametros => parametros
    ).subscribe(p => {
                        this.txtSearch = p.termino;
                        this.searchFilm();
                      }
      );
  }
  searchFilm() {
    this._ps.buscarPelicula(this.txtSearch).subscribe(ret => {
        this.films = ret.results;
        console.log(this.films );
    });
  }

}
