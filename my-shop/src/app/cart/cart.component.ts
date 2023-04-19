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
  status:Boolean=false;

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

  total:number=0;
   getTotal(){
    // this.total =this.cartService.getTotalPrice();
    let totl=0;

    for(let i=0;i<this.products.length;i++){
      totl+=this.products[i].total;
    }
    this.total=totl;
    return totl;
  }


  decriment(item:any){
    for(let i=0;i<this.products.length;i++){
      if(this.products[i].id==item.id && this.products[i].quintity>1){
        let val = this.products[i];
        val.quintity--;
        val.total -= val.price;
      this.products[i]=(val);
      }
    }

    this.status =true;
  }

}
