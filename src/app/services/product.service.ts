import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product;

  constructor() { 
    this.product = {
      "name": "Men's T-shirt Casual Slim Style",
      "images": [
        "../../../assets/images/product1.jpg",
        "../../../assets/images/product2.jpg",
        "../../../assets/images/product3.jpg"
      ],
      "productCode" : "ISC120-PX",
      "starRating": 4.2,
      "quantitity": 10,
      "price": 21.16,
      "condition": "new",
      "brand" : "gucci",
      "favourite": false,
      "feedback": false,
      "inShoppingCart": false,
      "description": "REBELLION is a creative act of solidarity between women and non-binary artists, and women human rights defenders around the world. Nine women and non-binary artists have produced nine feminist T-shirts, with 50% profit going to the artists, and 50% profit to Amnesty International."
    };
  }

  getProduct() : Product{
    return this.product;
  }
}
