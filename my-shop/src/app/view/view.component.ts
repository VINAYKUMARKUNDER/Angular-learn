import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart/cart-service.service';
import { WishlistServiceService } from '../wishlist/wishlist-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  constructor(private cartService:CartServiceService){}

  product:any ={};

  ngOnInit(): void {
      this.product= JSON.parse(localStorage.getItem('view') || "")
  }

  addToCart(product:any){
      let res=this.cartService.addToCart(product);
      if(res) alert("product addedd successfully!!")
      else alert("this product is already addedd!!");
  }
}
