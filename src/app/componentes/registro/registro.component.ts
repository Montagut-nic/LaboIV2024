import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  public usuario: Usuario = new Usuario();
  constructor(private router: Router) { };

  public registrar() {
    if (this.usuario.nombre.trim() != "" && this.usuario.clave.trim() != "") {
      localStorage.setItem(this.usuario.nombre, this.usuario.clave);
      this.router.navigateByUrl("/login");
    }
  }

  public volver(){
    this.router.navigateByUrl("/login");
  }

}
