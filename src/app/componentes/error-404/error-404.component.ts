import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.css'
})
export class Error404Component {

  constructor(private router: Router) { };
  
  public volver(){
    this.router.navigateByUrl("/login");
  }

}
