import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts()
  {
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Product)
  {
    this.productList.push({
      tipo: product.tipo,
      marca: product.marca,
      serie: product.serie,
      tenencia: product.tenencia
    });
  }

  updateProduct(product: Product)
  {
    this.productList.update(product.$key, {
      tipo: product.tipo,
      marca: product.marca,
      serie: product.serie,
      tenencia: product.tenencia
    });
  }

  deleteProduct($key: string)
  {
    this.productList.remove($key);
  }
}
