import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

// Routes
import { app_routing } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';

// Services
import { CargaImagenesService } from './services/carga-imagenes.service';



@NgModule({
  imports: [
    BrowserModule,
    app_routing,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent
  ],
  providers: [
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
