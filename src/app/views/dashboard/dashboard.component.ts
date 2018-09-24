import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from '../product/product.service';

export interface ProductModel {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  timestamp: string; // created or last updated time
}

const PRODUCT_DATA: ProductModel[] = [
  { id: 1, productName: 'Shovel', price: 22.00, quantity: 22, timestamp: '9/21/2018 08:30' },
  { id: 2, productName: 'Hammer', price: 4.00, quantity: 100, timestamp: '9/21/2018 08:30' },
  { id: 3, productName: 'Screwdriver', price: 1.59, quantity: 0, timestamp: '9/21/2018 08:30' },
  { id: 4, productName: 'Drill', price: 45.00, quantity: 55, timestamp: '9/21/2018 08:30' },
  { id: 5, productName: 'Skill Saw', price: 10.81, quantity: 11, timestamp: '9/21/2018 08:30' },
  { id: 6, productName: 'Rake', price: 12.01, quantity: 65, timestamp: '9/21/2018 08:30' },
  { id: 7, productName: 'Lawn Mower', price: 140.00, quantity: 5, timestamp: '9/21/2018 08:30' },
  { id: 8, productName: 'Fishing Pole', price: 15.99, quantity: 10, timestamp: '9/21/2018 08:30' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [ 'select', 'id', 'productName', 'price', 'quantity', 'timestamp', 'edit' ];
  dataSource;
  selection = new SelectionModel<ProductModel>(true, []);
  selectedProducts = false;

  private sub: Subscription;
  private dataSub: Subscription;

  constructor(private appSettings: AppSettings,
    private router: Router,
    private product: ProductService) {

  }

  ngOnInit() {
    console.log('*****in the on init of the dashboard****');
    this.appSettings.settings.loadingSpinner = false;
    this.sub = this.selection.changed.subscribe((data) => {
      console.log('here is the changed event data ', data);
      this.selectedProducts = this.selection.hasValue();
    });
    this.dataSub = this.product.getAllProducts().subscribe((data) => {
      console.log('got the data', data);
      const productArray = this.product.convertProducts(data);
      this.dataSource = new MatTableDataSource(productArray);
    });
  }

  ngOnDestroy() {
    console.log('destroying the subscription');
    this.sub.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  download(): void {
    console.log('downloading.....');
  }

  upload(): void {
    console.log('updloading .....');
  }

  edit(event: any, node: any): void {
    this.product.setProduct(node);
    this.router.navigate([ '/product', node.id ]);
  }

  viewHistory(node: any): void {
    this.router.navigate([ '/history', node.id ]);
  }

}
