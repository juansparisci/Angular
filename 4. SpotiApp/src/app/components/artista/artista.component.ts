import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {
  artista:any;
  pistas:any[];
  constructor(private activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.map(
      parametros=>parametros['id']
    ).subscribe(id=>{
                  this.spotifyService.getArtista(id).subscribe(artista=>this.artista=artista);
                  this.spotifyService.getTop(id).subscribe(pistas=>this.pistas=pistas);
                  }
                );
  }

}
