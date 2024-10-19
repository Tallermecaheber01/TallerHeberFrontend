import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AgendarCitaComponent } from './componentes/agendar-cita/agendar-cita.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { ResetPasswordComponent } from './componentes/recuperar/recuperar.component';
import { VerifyCodeComponent } from './componentes/verificar-codigo/verificar-codigo.component';
import { NewPasswordComponent } from './componentes/new-password/new-password.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'agendar-cita', component: AgendarCitaComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'recuperar', component: ResetPasswordComponent },
  { path: 'verificar', component: VerifyCodeComponent },
  {path:'nueva_contra',component: NewPasswordComponent},
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: '**', redirectTo: '/principal' }
];
