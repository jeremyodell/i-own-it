import { ProductComponent } from './product.component';
import { Injectable } from '@angular/core';
import { ProductModel } from '../dashboard/dashboard.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _product: ProductModel;

  constructor(private httpClient: HttpClient) {
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
  private convertProduct(product: any): ProductModel {
    return {
      id: product.Id,
      productName: product.Product_name,
      price: product.Price,
      quantity: product.Quantity,
      timestamp: product.Timestamp
    };
  }

  private convertProductModel(product: ProductModel): any {
    return {
      Id: product.id,
      Product_name: product.productName,
      Price: product.price,
      Quantity: product.quantity,
      Timestamp: product.timestamp
    };
  }

  convertProducts(productArray: any[]): ProductModel[] {
    const returnValue = [];
    productArray.forEach((product) => {
      returnValue.push(this.convertProduct(product));
    });
    return returnValue;
  }
  getAllProducts(): any {
    return this.httpClient.get('http://localhost:3001/api/products/report');
  }

  saveProduct(product: ProductModel): Observable<any> {
    return this.httpClient.post('http://localhost:3001/api/products/', product);
  }


}
