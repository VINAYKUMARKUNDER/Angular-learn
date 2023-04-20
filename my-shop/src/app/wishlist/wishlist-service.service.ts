import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.wishlistProduct = JSON.parse(localStorage.getItem('wishList') || "");

  }

  wishlistProduct: any = [];

  public wishlistProductList = new BehaviorSubject<any>([]);

  /**
   *
   * @param product take a product in user
   * @returns: return a boolean value if product add in wishListProduct then return true or false
   */
  public addProduct(product: any) {

    try{
      this.wishlistProduct = JSON.parse(localStorage.getItem('wishList') || "");
    }catch{
      localStorage.setItem('wishList', JSON.stringify(this.wishlistProduct));
    }

    let val = this.checkProductAvailability(product);
    if (val.status === false) {
      this.wishlistProduct.push(product);
      localStorage.setItem('wishList', JSON.stringify(this.wishlistProduct));
      return true;
    }
    else {
      this.wishlistProduct.splice(val.index, 1);
      localStorage.setItem('wishList', JSON.stringify(this.wishlistProduct));
      return false;
    }
  }



  /**
   *
   * @param product :  take a product in user
   * @returns : return a boolean value if product is already avel in wishlistProduct
   *  then return false or true
   */
  public checkProductAvailability(product: any) {
    for (let i = 0; i < this.wishlistProduct.length; i++) {
      if (this.wishlistProduct[i].id === product.id) {
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



  public removeOneWishlistItem(product: any) {
    this.wishlistProduct = JSON.parse(localStorage.getItem('wishList') || "");
    this.wishlistProduct.map((a: any, index: number) => {
      console.log(product)
      if (product.id === a.id) {
        this.wishlistProduct.splice(index, 1);
        localStorage.setItem("wishList", JSON.stringify(this.wishlistProduct));
        window.location.reload();

      }
    })
  }

  public removeAllWishLists() {
    this.wishlistProduct = [];
    localStorage.removeItem("wishList")
    window.location.reload();
  }



}
