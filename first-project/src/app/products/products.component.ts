import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Product 1',
      price: 10.99,
      description: 'This is the first product'
    },
    {
      name: 'Product 2',
      price: 19.99,
      description: 'This is the second product'
    },
    {
      name: 'Product 3',
      price: 4.99,
      description: 'This is the third product'
    }
  ];
}
