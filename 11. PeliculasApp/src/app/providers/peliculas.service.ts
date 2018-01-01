import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';






@Injectable()
export class PeliculasService {
  private apiKey = 'c362d3e1d0da48aca19f4f7e2750b59a';
  private urlMovieDb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) {}

  getTheater() {
    const d1 = this.getDateyyyymmdd(-15);
    const d2 = this.getDateyyyymmdd();
    const url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${d1}&primary_release_date.lte=${d2}
    &api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json()
    );
  }

  getPopulares() {
    const url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json()
    );
  }

  getPopularKidsFilms() {
    const url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification=G&include_adult=false&include_video=false&page=1
    &sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json()
    );
  }

  buscarPelicula( texto: string ) {
    const url = `${ this.urlMovieDb }/search/movie?query=${ texto }
    &sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res => res.json());
  }

  getFilmDetail( id: string ) {
    const url = `${ this.urlMovieDb }/movie/${id}?api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res => res.json());
  }

  getDateyyyymmdd(days: number= 0) {
    // GET CURRENT DATE
    const date = new Date();
    date.setDate(date.getDate() + days);
    // GET YYYY, MM AND DD FROM THE DATE OBJECT
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 1).toString();
    const dd  = date.getDate().toString();
    // CONVERT mm AND dd INTO chars
    const mmChars = mm.split('');
    const ddChars = dd.split('');
    // CONCAT THE STRINGS IN YYYY-MM-DD FORMAT
    const ret = yyyy + '-' + (mmChars[1] ? mm : '0' + mmChars[0]) + '-' + (ddChars[1] ? dd : '0' + ddChars[0]);
    return ret;
  }
}
