import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
  usuario:any={
    nombreCompleto:{
      nombre : "Juan",
      apellido : "Sparisci"
    },
    correo:"juan@juan.com"//,
    // pasatiempos:["Comer","Dormir","Correr"]
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
                            ]),
   'pasatiempos':new FormArray([
     new FormControl('Correr', Validators.required)
   ])
});
//    this.forma.setValue(this.usuario);
   }
   guardarCambios()
   {
      console.log(this.forma.value);
      console.log(this.forma);
      this.forma.reset(
        // {
        //   nombreCompleto:{
        //     nombre:"",
        //     apellido:""
        //   },
        //   correo:""
        // }
      );

   }
   agregarPasatiempo()
   {

     (<FormArray>this.forma.controls['pasatiempos'])
        .push(
          new FormControl
                ("",
                  Validators.required)
                );
   }


}
