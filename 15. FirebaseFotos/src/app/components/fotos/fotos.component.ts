import { Component } from '@angular/core';
import { CargaImagenesService  } from '../../services/carga-imagenes.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent {
  imagenes: FirebaseListObservable<any[]>;

  constructor(private _cargarImagenes: CargaImagenesService) {
    this.imagenes = this._cargarImagenes.listaUltimasImagenes( 10 );
  }

}
