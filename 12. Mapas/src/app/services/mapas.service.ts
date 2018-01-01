import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';

@Injectable()
export class MapasService {
  marcadores: Marcador[] = [];
  constructor() {
    const nuevoMarc: Marcador = {
      lat: -32.587999,
      lng: -61.175000,
      titulo: 'Casa',
      draggable: true
    };
    this.marcadores.push(nuevoMarc);
  }

  insertarMarcador(nuevoMarcador: Marcador) {
    this.marcadores.push(nuevoMarcador);
    this.guardarMarcadoresLS();
  }
  guardarMarcadoresLS() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
  cargarMarcadoresLS() {
    this.marcadores = (localStorage.getItem('marcadores'))
                      ? JSON.parse(localStorage.getItem('marcadores'))
                      : [];
  }
  eliminarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarMarcadoresLS();
  }
}
