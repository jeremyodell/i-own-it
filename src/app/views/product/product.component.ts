import { Observable } from 'rxjs';
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
    this.productService.saveProduct(this.product).subscribe((result) => {
      this.router.navigate(['/']);
    },
    (error) => {
      console.log('there was an error with saving the product.');
      // this would be a good place for an alert service to flash a message to the user.
    });
  }

}
