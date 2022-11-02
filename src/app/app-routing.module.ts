import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './componentes/editar/editar.component';
import { LoginComponent } from './componentes/login/login.component';
import { MascotasComponent } from './componentes/mascotas/mascotas.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';

const routes: Routes = [
  { path: '', component: TableroComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'registrarse',
    component: RegistroComponent,
    canActivate: [ConfiguracionGuard],
  },
  {
    path: 'mascota',
    canActivate: [AuthGuard],
    children: [
      { path: 'editar', component: EditarComponent },
      { path: 'editar/:id', component: EditarComponent },
      { path: ':id', component: MascotasComponent },
    ],
  },

  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
