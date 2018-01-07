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
    const storageRef = firebase.storage().ref();
    for ( const item of archivos ){
      item.estaSubiendo = true;
      const uploadTask: firebase.storage.UploadTask =
            storageRef.child(`${this.CARPETA_IMAGENES}/${item.NombreArchivo}`)
            .put(item.Archivo);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                    (snapshot) => item.progreso = ( uploadTask.snapshot.bytesTransferred /  uploadTask.snapshot.totalBytes) * 100,
                    ( error ) => console.error('Error al subir', error),
                    () => {
                      item.url = uploadTask.snapshot.downloadURL;
                      item.estaSubiendo = false;
                      this.guardarImagen({
                        nombre: item.NombreArchivo,
                        url: item.url
                      });
                    }
                    
      )
    }
  }
  private guardarImagen(imagen: any) {
    this.af.list(`${this.CARPETA_IMAGENES}`).push(imagen);
  }
}
