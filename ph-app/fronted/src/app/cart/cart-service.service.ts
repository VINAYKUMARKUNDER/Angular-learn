import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  ngOnInit(): void {
    this.cartItem=JSON.parse(localStorage.getItem('products') || '');
  }


  public cartItem: any = [];



  addToCart(pro: any) {
    let val = this.checkProduct(pro);
    if (val.status) {
      return false;
    }
    else {
      this.cartItem.push(pro);
      this.getTotalPrice();
      localStorage.setItem("products", JSON.stringify(this.cartItem));
      return true;
    }
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
    this.cartItem = JSON.parse(localStorage.getItem("products") || "")
    this.cartItem.map((a: any, index: number) => {
      if (product.id === a.id) {
        this.cartItem.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(this.cartItem));
        window.location.reload();
      }
    })

  }


  removeAll() {
    this.cartItem = [];
    localStorage.removeItem("products")
    window.location.reload();
  }
}
