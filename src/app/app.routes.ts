import { Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorLoginComponent } from './componentes/error-login/error-login.component';
import { LoginComponent } from './componentes/login/login.component';
import { Error404Component } from './componentes/error-404/error-404.component';
import { RegistroComponent } from './componentes/registro/registro.component';

export const routes: Routes = [{
    path: "", redirectTo: "login", pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "bienvenido",
    component: BienvenidoComponent
  },
  {
    path: "error-login",
    component: ErrorLoginComponent
  },
  {
    path: "error-404",
    component: Error404Component
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: '**', redirectTo: "error-404"
  }];
