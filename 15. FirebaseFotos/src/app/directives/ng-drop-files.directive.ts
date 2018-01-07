import { Directive, EventEmitter, ElementRef,
        HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[NgDropFiles]'
})
export class NgDropFilesDirective {
  @Input() archivos: FileItem[] = [];
  @Output() archivoSobre: EventEmitter<any> = new EventEmitter();
  constructor(public elemento: ElementRef) { }
  @HostListener( 'dragenter', ['$event'] )
  public onDragEnter( event: any ) {
    this.archivoSobre.emit( true );
  }
  @HostListener( 'dragover', ['$event'] )
  public onDragOver( event: any ) {
    const transferencia = this._getTransferencia( event );
    transferencia.dropEffect = 'copy';
    this._prevenirYDetener( event );
    this.archivoSobre.emit( true );
  }
  @HostListener( 'dragleave', ['$event'] )
  public onDragLeave( event: any ) {
    this.archivoSobre.emit( false );
  }
  @HostListener( 'drop', ['$event'] )
  public onDrop( event: any ) {
    const transferencia = this._getTransferencia( event );
    if ( !transferencia ) {
       return;
    }
    this._agregarArchivos( transferencia.files );
    this.archivoSobre.emit( false );
    this._prevenirYDetener( event );
  }

  private _getTransferencia(event: any) {
    return event.dataTransfer ? event.dataTransfer
            : event.originalEvent.dataTransfer;
  }
  private _prevenirYDetener( event: any ) {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoPuedeSerCargado( archivo: File ): boolean {
    return !(this._archivoYaFueDropeado(archivo.name) || !this._esImagen(archivo.type));
  }
  private _archivoYaFueDropeado(nombreArchivo: string): boolean {
    for (const archivo of this.archivos) {
      if ( archivo.Archivo.name === nombreArchivo ) {
        console.log('El archivo ya existe en la lista', nombreArchivo);
        return true;
      }
    }
    return false;
  }
  private _agregarArchivos(archivoLista: FileList) {
    for ( const propiedad of Object.getOwnPropertyNames( archivoLista )) {
      const archTemp = archivoLista[propiedad];
      if ( this._archivoPuedeSerCargado(archTemp)) {
        const nuevoArchivo = new FileItem(archTemp);
        this.archivos.push( nuevoArchivo );
      }
    }
    console.log(this.archivos);
  }

  private _esImagen( tipoArchivo: string): boolean {
    return ( tipoArchivo === '' || tipoArchivo === undefined )
            ? false
            : tipoArchivo.startsWith('image');

  }
}
