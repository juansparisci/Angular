import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HeroesService,Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:Heroe;

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router:Router)
  {
      this.activatedRoute.params.subscribe(params=>{
      this.heroe=heroesService.getHeroe(params["id"]);
     });

   }
   regresar()
   {
     this.router.navigate(['/heroes']);
   }

}
