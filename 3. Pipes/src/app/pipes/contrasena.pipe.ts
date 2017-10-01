import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean): string {
   if(!activar)return value;
   var retorno ="";

    for(let i=0; i<value.length;i++)
    {
      retorno+='*';
    }
    return retorno;
  }

}
