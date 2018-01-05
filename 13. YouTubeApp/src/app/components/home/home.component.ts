import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  private videos: any[];
  private videoSel: any;

  constructor(private _yts: YoutubeService) {
    this._yts.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

  ngOnInit() {
  }
  verVideo(video: any) {
    this.videoSel = video;
    $('#myModal').modal();
  }
  cerrarModal() {
    this.videoSel = null;
    $('#myModal').modal('hide');
  }
  cargarMas() {
    this._yts.getVideos().subscribe(videos => {
      this.videos.push(...videos);
    });
  }
}
