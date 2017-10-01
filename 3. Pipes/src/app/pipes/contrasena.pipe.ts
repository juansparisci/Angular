import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, hide:boolean): string {
    return !hide ? value : value.replace( /[a-zA-Z0-9]/g, '*' ) ;
  }

}
