import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public usuario: Usuario = new Usuario();
  constructor(private router: Router) { };

  public logear() {
    
    const strPass = localStorage.getItem(this.usuario.nombre);
    if (this.usuario.clave == strPass) {
      const strUser = sessionStorage.setItem("username",this.usuario.nombre);
      this.router.navigateByUrl("/bienvenido");
    }
    else {
      this.router.navigateByUrl("/error-login");
    }
  }

  public registrar(){
    this.router.navigateByUrl("/registro");
  }
}

