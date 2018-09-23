import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ]
})
export class ProductComponent implements OnInit {
  product = this.productService.getProduct();

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit() {
  }

  submit(): void {
    console.log('the product', this.product);
    // save the product
    this.router.navigate([ '/' ]);
  }

}
