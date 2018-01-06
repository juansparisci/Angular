import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FileItem } from '../models/file-item' ;
import * as firebase from 'firebase';
@Injectable()
export class CargaImagenesService {
  private CARPETA_IMAGENES = 'img';
  constructor(public af: AngularFireDatabase) {}

  listaUltimasImagenes(numeroImagenes: number): FirebaseListObservable<any[]> {
    return this.af.list(`${this.CARPETA_IMAGENES}`,{
      query: {
        limitToLast: numeroImagenes
      }
    });
  }
  cargarImagenesHaciaFirebase(archivos: FileItem[]) {
    console.log(archivos);
  }
  private guardarImagen(imagen: any) {
    this.af.list(`${this.CARPETA_IMAGENES}`).push(imagen);
  }
}
