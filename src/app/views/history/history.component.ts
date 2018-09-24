import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../dashboard/dashboard.component';

export interface HistoryModel {
  id: number;
  productId: string;
  updateBy: number;
  timestamp: string; // created or last updated time
  previousData: ProductModel;
}

const HISTORY_DATA: HistoryModel[] = [
  // { id: 1, productName: 'Shovel', price: 22.00, quantity: 22, timestamp: '9/21/2018 08:30' },
  // { id: 2, productName: 'Hammer', price: 4.00, quantity: 100, timestamp: '9/21/2018 08:30' },
  // { id: 3, productName: 'Screwdriver', price: 1.59, quantity: 0, timestamp: '9/21/2018 08:30' },
  // { id: 4, productName: 'Drill', price: 45.00, quantity: 55, timestamp: '9/21/2018 08:30' },
  // { id: 5, productName: 'Skill Saw', price: 10.81, quantity: 11, timestamp: '9/21/2018 08:30' },
  // { id: 6, productName: 'Rake', price: 12.01, quantity: 65, timestamp: '9/21/2018 08:30' },
  // { id: 7, productName: 'Lawn Mower', price: 140.00, quantity: 5, timestamp: '9/21/2018 08:30' },
  // { id: 8, productName: 'Fishing Pole', price: 15.99, quantity: 10, timestamp: '9/21/2018 08:30' },
];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: [ './history.component.scss' ]
})
export class HistoryComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
