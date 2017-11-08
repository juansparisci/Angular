import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const TOKEN = {
              token: "Bearer BQB55IDtHM4DDy2CT4rqg8knFC7Wmi-IO6FT_5yvLUCFrB7M4i1HGBi6Q6Jl2nCEf9Kl3s9JkdCFHf5Z_Hw4Sg"
              }

@Injectable()
export class SpotifyService {

  constructor(private http:Http) { }
  artistas:any[]=[];
  urlBusqueda:string="https://api.spotify.com/v1/search";
  urlArtista:string="https://api.spotify.com/v1/artists/";

  getArtistas(termino:string)
  {
    let headers = new Headers();

    headers.append('authorization',TOKEN.token);
    let query =`?q=${ termino }&type=artist`;
    let url=this.urlBusqueda+query;
    return this.http.get(url,{headers})
            .map(res=>{
              // console.log(res.json().artists.items);
              this.artistas=res.json().artists.items;
              // console.log(this.artistas);
              return this.artistas;
            });
  }
  getArtista(id:string)
  {
    let headers = new Headers();
    headers.append('authorization',TOKEN.token);
    let query =`${ id }`;
    let url=this.urlArtista+query;
    return this.http.get(url,{headers})
            .map(res=>{
                    return res.json();
            });
  }
  getTop(id:string)
  {
    let headers = new Headers();
    headers.append('authorization',TOKEN.token);
    let query =`${ id }/top-tracks?country=US`;
    let url=this.urlArtista+query;
    return this.http.get(url,{headers})
            .map(res=>{
                    // console.log(res.json().tracks);
                    return res.json().tracks;
            });
  }

}
