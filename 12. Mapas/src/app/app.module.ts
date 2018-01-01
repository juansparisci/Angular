import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AgmCoreModule } from '@agm/core';

import { MapasService } from './services/mapas.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnpJc3LFXOhLpii8PM-cEJyT2E1RzVejQ'
    }),
    FormsModule
  ],
  providers: [
    MapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
