import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FilmComponent } from './components/film/film.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: 'film/:id/:origen/:termino', component: FilmComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
