import { Injectable } from '@angular/core';
import { ProductModel } from '../dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _product: ProductModel;

  constructor() {
    this._product = {
      id: 0,
      productName: '',
      price: 0,
      quantity: 0,
      timestamp: ''
    };
  }

  setProduct(product: ProductModel): void {
    this._product = {
      id: product.id,
      productName: product.productName,
      price: product.price,
      quantity: product.quantity,
      timestamp: product.timestamp
    };
  }

  getProduct(): ProductModel {
    return this._product;
  }
}
