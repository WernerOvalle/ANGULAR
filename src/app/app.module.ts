import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// components
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

// service
import { ProductService } from './services/product.service';

// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './components/login/login.component';
// router
import { RouterModule } from '@angular/router';
import { StartpageComponent } from './components/startpage/startpage.component';
//auth
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    LoginComponent,
    StartpageComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductsComponent},{
        path: 'login',
       component:   LoginComponent, }
       ,{
        path: 'startpage',
       component:   StartpageComponent,

  }])
  ],
  providers: [
    AuthService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
