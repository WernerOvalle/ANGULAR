import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {var contenido = document.getElementById("contenido");
 /* contenido.innerHTML=`
  <a class="navbar-brand" href="#">Oficina Central de Proteccion S.A.</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" routerLink="/login" >Login <span class="sr-only">(current)</span></a>
      </div> <div class="navbar-nav">
      <button (click)="logout()" *ngIf="authService.user | async"class="btn btn-primary btn-block btn-sm">
      Logout
    </button>
    </div>
  </div>
 `;*/
  }

}
