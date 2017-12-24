import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Heroe, } from '../interfaces/heroe.interface';
import 'rxjs/Rx';
@Injectable()
export class HeroesService {
  heroesUrl:string="https://heroesapp-9439b.firebaseio.com/heroes.json";
  constructor(private http:Http) { }
  nuevoHeroe(heroe:Heroe)
  {
    let body = JSON.stringify(heroe);
    let headers= new Headers(
      {'Content-Type':'application/json'}
    );
    return this.http.post(this.heroesUrl,body,{headers})
    .map(res=>
    {
      console.log(res.json());
      return res.json();
    }
  )
  }
}
