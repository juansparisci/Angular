import { Component } from '@angular/core';
import { log } from 'util';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  draggable: string = '1';
  marcadorSel: any = null;
  lat: number = -32.587999;
  lng: number =  -61.175000;
  zoom: number = 17;
  title = 'Mapas';

  constructor(public _ms: MapasService) {
    this._ms.cargarMarcadoresLS();
  }

  clickMapa( evento ) {
    const nuevoMarc: Marcador = {
                                lat: evento.coords.lat,
                                lng: evento.coords.lng,
                                titulo: 'Sin Titulo',
                                draggable: true
                              };
    this._ms.insertarMarcador(nuevoMarc);
  }
  clickMarcador(marcador: Marcador, index: number) {
   // console.log(marcador, index);
   this.marcadorSel = marcador;
   this.draggable = this.marcadorSel.draggable ? '1' : '0';
  }
  dragEndMarcador(marcador: Marcador, event) {
   /*  console.log(marcador, event); */
    marcador.lat = event.coords.lat;
    marcador.lng = event.coords.lng;
    this._ms.guardarMarcadoresLS();
  }
  cambiarDrag() {
    this.marcadorSel.draggable = this.draggable === '1' ;
  }
}
