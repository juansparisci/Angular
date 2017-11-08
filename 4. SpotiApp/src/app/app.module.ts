import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

// services
import {SpotifyService} from './services/spotify.service';

//pipes
import {SinfotoPipe} from './pipes/sinfoto.pipe';
import {DomseguroPipe} from './pipes/domseguro.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import {APP_ROUTING} from './app.routes';
import { ArtistaComponent } from './components/artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    DomseguroPipe,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
