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
    this.archivoSobre.emit( true );
  }
  @HostListener( 'dragleave', ['$event'] )
  public onDragLeave( event: any ) {
    this.archivoSobre.emit( false );
  }

}
