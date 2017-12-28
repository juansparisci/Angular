import { Component } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent   {
  peliculas: any[]= [];
  constructor(private _ps: PeliculasService) {
    this._ps.getPopulares().subscribe(res => console.log(res));
  }



}
