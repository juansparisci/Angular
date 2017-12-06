import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
  usuario:Object={
    nombreCompleto:{
      nombre : "Juan",
      apellido : "Sparisci"
    },
    correo:"juan@juan.com"
  }

  forma:FormGroup;
  constructor() {
    console.log(this.usuario);
this.forma=new FormGroup({
  'nombreCompleto':new FormGroup({
    'nombre':new FormControl('', [Validators.required,
                                  Validators.minLength(3)]),
    'apellido':new FormControl('', Validators.required),
  }),
  'correo':new FormControl('',
                            [
                              Validators.required,
                              Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                            ])
});
   }
   guardarCambios()
   {
      console.log(this.forma.value);
      console.log(this.forma);
   }


}
