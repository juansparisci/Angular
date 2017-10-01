import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../servicios/heroes.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
heroes:Heroe[]=[];
termino:string;
  constructor(private _heroesService:HeroesService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
     this.activatedRoute.params.subscribe(params=>{
        this.termino = params['termino'];
      //  console.log(params['termino']);
       if(params['termino']){
         this.heroes = this._heroesService.buscarHeroes( params['termino'] );        
       }else{
           this.heroes = this._heroesService.getHeroes();
       }
     });
   }
  verHeroe(id:number)
  {
      this.router.navigate( ['/heroe',id] );
  }

}
