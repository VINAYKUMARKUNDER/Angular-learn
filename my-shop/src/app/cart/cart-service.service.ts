import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService implements OnInit{

  ngOnInit(): void {
        this.cartItem= JSON.parse(localStorage.getItem("products") || "");
  }

  constructor() { }

  public cartItem: any = [];
  public productList = new BehaviorSubject<any>([]);

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItem.push(...product);
    this.productList.next(product);
  }


  addToCart(product: any) {

    let pro: any = {
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      description: product.description,
      total: product.price,
      quintity: 1
    }

    let val = this.checkProduct(pro);
    if (val.status) {
      return false;
    }
    else  {
      this.cartItem.push(pro);

    // this.productList.next(this.cartItem);
    this.getTotalPrice();
    localStorage.setItem("products", JSON.stringify(this.cartItem));
      return true;
    }


    // console.log(this.cartItem);
  }

  checkProduct(pro: any) {
    for (let i = 0; i < this.cartItem.length; i++) {
      if (this.cartItem[i].id === pro.id) {
        let val = {
          status: true,
          index: i
        }
        return val;
      }
    }
    let val = {
      status: false,
      index: 0
    }
    return val;
  }




  getTotalPrice(): number {
    let totalPrice = 0;

    this.cartItem.map((a: any) => {
      totalPrice += a.total;
    })

    return totalPrice;
  }

  removeCartItem(product: any) {
    this.cartItem= JSON.parse(localStorage.getItem("products") || "")
    this.cartItem.map((a: any, index: number) => {
      // console.log(product)
      if (product.id === a.id) {
        this.cartItem.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(this.cartItem));
        window.location.reload();

      }
    })

  }


  removeAll() {
    this.cartItem = [];
    this.productList.next(this.cartItem);
    localStorage.removeItem("products")
    window.location.reload();
  }
}
