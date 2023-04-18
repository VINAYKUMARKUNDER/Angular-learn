import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private cartService: CartServiceService){}

  public products : any= [];

  public grandTotal : number = 0;

  ngOnInit(): void{


    this.cartService.getProduct()
    .subscribe(res=>{
        console.log(res)
      this.products=res;
      this.grandTotal = this.cartService.getTotalPrice();
    })


  }


  removeItem(product:any){
    this.cartService.removeCartItem(product);
  }

  removeAll(){
    this.cartService.removeAll();
  }

}
