import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule, HttpModule } from '@angular/http';
import { APP_ROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';

// Providers
import { PeliculasService } from './providers/peliculas.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FilmComponent } from './components/film/film.component';
import { ImagePipe } from './pipes/image.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    FilmComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
