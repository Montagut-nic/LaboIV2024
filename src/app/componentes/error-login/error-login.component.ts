import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error-login.component.html',
  styleUrl: './error-login.component.css'
})
export class ErrorLoginComponent {

  constructor(private router: Router) { };
  
  public volver(){
    this.router.navigateByUrl("/login");
  }

}
