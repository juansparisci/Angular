import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      return  !args ? (( value === null || value === undefined ||
                      (value.backdrop_path === null && value.poster_path === null ))
                      ? './assets/images/notFilm.png'
                      : 'https://image.tmdb.org/t/p/w500/' + (value.backdrop_path
                                                                                ? value.backdrop_path
                                                                                : value.poster_path))
              : 'https://image.tmdb.org/t/p/w500/' + args;

  }
}
