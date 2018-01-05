import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'videoYouTube'
})
export class VideoYouTubePipe implements PipeTransform {

  constructor(private ds: DomSanitizer) {

  }
  transform(value: string): any {
    const url = `https://www.youtube.com/embed/`;
    return this.ds.bypassSecurityTrustResourceUrl(url + value);
  }

}
