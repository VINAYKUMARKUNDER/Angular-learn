import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http:HttpClient) { }
  URL: string = 'http://localhost:3000/api/v1/';

  ngOnInit(): void {
    try {
      this.cartItem=JSON.parse(localStorage.getItem('products') || '');
    } catch (error) {}
  }


  public cartItem: any = [];



  addToCart(product: any) {
    try {
      this.cartItem=JSON.parse(localStorage.getItem('products') || '');
    } catch (error) {}

    let pro: any = {
          id: product.id,
          about: product.about,
          batchid: product.batchid,
          expdate: product.expdate,
          mfgcompany: product.mfgcompany,
          mfgdate: product.mfgdate,
          numberOfItemInOneLeaf: product.numberOfItemInOneLeaf,
          price: product.price,
          productName: product.productName,
          sellerId: product.sellerId,
          totalLeafInOneBox: product.totalLeafInOneBox,
          type: product.type,
          unit: product.unit,
          total: product.price,
          quintity: 1
    }


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



  getCustomerById(id:Number){
    let dbCartItem;
    this.http.get(`${this.URL}cart/${id}`).subscribe({
        next:res=>{
         return res
          dbCartItem= res;
        }
      });
      console.log(dbCartItem)

      return dbCartItem;
  }

}
