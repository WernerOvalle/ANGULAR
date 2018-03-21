import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  constructor(
    public authService: AuthService,
    private toastr: ToastrService
  ) { }
  
 
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
    this.toastr.success( 'Registro Exitoso');
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
    this.toastr.success( 'Sesion Iniciada');
  }

  logout() {
    this.authService.logout();
    this.toastr.success( 'Sesion Cerrada');
  }
}