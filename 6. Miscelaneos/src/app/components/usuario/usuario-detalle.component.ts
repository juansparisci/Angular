import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
  this.router.parent.params.subscribe(parametros=>{
    console.log("Ruta Hija Detalle");
    console.log(parametros);
  });
}

  ngOnInit() {
  }

}
