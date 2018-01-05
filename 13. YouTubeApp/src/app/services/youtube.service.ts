import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class YoutubeService {
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyAFnt9tO3tqddRnIk63gjIRkAO3rzLQyEM';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(public http: Http) { }
  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;

    const params = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playlist);
    params.set('key', this.apiKey);

    if (this.nextPageToken) {
      params.set('pageToken', this.nextPageToken);
    }

    return this.http.get( url, { search: params } )
          .map(res => {
            this.nextPageToken = res.json().nextPageToken;
            const videos: any[] = [];
            for ( const video of res.json().items){
              const snippet = video.snippet;
              videos.push(snippet);
            }
            return videos;
          });
  }
}
