import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe:Heroe={
    nombre:"",
    bio:"",
    casa:"Marvel"
  }
  nuevo:boolean=false;
  id:string;
  constructor(private _heroesService:HeroesService,
              private router:Router,
              private route:ActivatedRoute) {
                this.route.params
                .subscribe(params=>
                  {
                    this.id=params['id'];
                    if(this.id!="nuevo")
                    {
                      this._heroesService.getHeroe(this.id)
                          .subscribe(heroe=>
                            this.heroe=heroe
                          )
                    }
                }
                );
   }

  ngOnInit() {
  }
  guardar(){

    if(this.id=="nuevo")
    {
      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe(data=>
          {
            this.router.navigate(['/heroe',data.name]);
          },
          error=>console.log(error)
        );
    }
    else
    {
      this._heroesService.actualizarHeroe(this.heroe,this.id)
        .subscribe(data=>
          {
            console.log(data)
          },
          error=>console.log(error)
        );
    }


  }
agregarNuevo(forma:NgForm)
{
  this.router.navigate(['/heroe','nuevo']);
  forma.reset(
    {
      casa:"Marvel"
    }
  );
}
}
