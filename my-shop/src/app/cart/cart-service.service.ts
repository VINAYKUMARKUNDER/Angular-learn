import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  public cartItem:any =[];
  public productList = new BehaviorSubject<any>([]);

  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(product: any){
    this.cartItem.push(...product);
    this.productList.next(product);
  }


  addToCart(product : any){
    this.cartItem.push(product);
    this.productList.next(this.cartItem);
    this.getTotalPrice();
    console.log(this.cartItem);
  }

  getTotalPrice() : number{
    let totalPrice=0;

    this.cartItem.map((a:any)=>{
      totalPrice+=a.total;
    })

    return totalPrice;
  }

  removeCartItem(product:any){
    this.cartItem.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItem.splice(index,1);
      }
    })
  }


  removeAll(){
    this.cartItem=[];
    this.productList.next(this.cartItem);
  }
}
