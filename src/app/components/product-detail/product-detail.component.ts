import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  pageTitle: string = "Product Details";
  errorMessage: string;

  constructor( private service: ProductService) { 
    this.product = this.service.getProduct();

  }

  ngOnInit(): void {
    console.log(this.product);
  }

  toggleFavourite(): void{
    console.log("method called!!!");
    this.product.favourite = !this.product.favourite;
  }

  toggleFeedback(): void{
    console.log("method called!!!");
    if(!this.product.feedback){
      this.product.starRating = this.product.starRating + 0.1;
    }else{
      this.product.starRating = this.product.starRating - 0.1;
    }
    this.product.feedback = !this.product.feedback;
    
  }

  toggleShoppingCart() : void{
    this.product.inShoppingCart = !this.product.inShoppingCart;
  }

}
