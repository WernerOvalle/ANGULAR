import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



email: string;
password: string;

constructor(public router: Router,
  public authService: AuthService) {}
ngOnInit() {
this.router.navigate(['/startpage']);
}
signup() {
  this.authService.signup(this.email, this.password);
  this.email = this.password = '';
}

login() {
  this.authService.login(this.email, this.password);
  this.email = this.password = '';    
}

logout() {
  this.authService.logout();
}
}