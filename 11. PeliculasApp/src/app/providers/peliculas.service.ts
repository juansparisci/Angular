import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';






@Injectable()
export class PeliculasService {
  private apiKey = 'c362d3e1d0da48aca19f4f7e2750b59a';
  private urlMovieDb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) {}

  getPopulares() {
    const url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json()
    );
  }
  buscarPelicula( texto: string ) {
    const url = `${ this.urlMovieDb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=
    ${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res => res.json());
  }

}
