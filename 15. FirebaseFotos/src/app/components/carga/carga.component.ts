import { Component } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../services/carga-imagenes.service';
@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent {
  estaSobreDropZone: boolean;
  permiteCargar = true;
  archivos: FileItem[] = [];
  constructor(public cargaImagenes: CargaImagenesService) { }
  archivoSobreDropZone( e: any ) {
    console.log(e);
    this.estaSobreDropZone = e;
  }
  cargarImagenesFirebase() {
    this.permiteCargar = false;
    this.cargaImagenes.cargarImagenesHaciaFirebase(this.archivos);
  }
  limpiarArchivos() {
    this.archivos = [];
    this.permiteCargar = true;
  }

}
