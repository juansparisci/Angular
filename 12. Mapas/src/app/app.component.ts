import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = -32.587999;
  lng: number =  -61.175000;
  zoom: number = 17;
  title = 'Mapas';
}
