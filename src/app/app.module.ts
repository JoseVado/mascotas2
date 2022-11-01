import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat/';
import {
  AngularFirestoreModule,
  SETTINGS,
} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { MascotasComponent } from './componentes/mascotas/mascotas.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { mascotaServicio } from './servicios/masctoa.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    MascotasComponent,
    TableroComponent,
    EditarComponent,
    LoginComponent,
    RegistroComponent,
    NoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'mascotas'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [mascotaServicio],
  bootstrap: [AppComponent],
})
export class AppModule {}
