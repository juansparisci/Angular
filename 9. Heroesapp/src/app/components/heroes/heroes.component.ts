import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:any;
  loading:boolean=true;
  constructor(private _heroesService:HeroesService) {

    this._heroesService.getHeroes().subscribe(
      heroes=>{
        console.log(heroes);
        this.heroes=heroes;
        this.loading=false;
    });
   }

  ngOnInit() {
  }
borrarHeroe(key$:string)
{
  this._heroesService.borrarHeroe(key$).subscribe
  (rta=>
    {
      if(rta)console.error(rta);
      else
      {
        delete this.heroes[key$];
      }
    });
}
}
