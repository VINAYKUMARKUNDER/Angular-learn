import { Component, OnInit } from '@angular/core';
import { CartServiceService } from './cart-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private cartService: CartServiceService, private http:HttpClient){}

   products : any= [];
  productsLen: any=[];
  status:Boolean=false;

  public grandTotal : number = 0;
  URL: string = 'http://localhost:3000/api/v1/';

  ngOnInit(): void{
    this.getAllCartData();
    console.log(this.products)
    // try {
    //   this.products=JSON.parse(localStorage.getItem('products') || '');
    // } catch (error) {}
    //     console.log(this.products)
    }


    getAllCartData(){
      this.http.get(`${this.URL}cart/${1}`).subscribe({
        next:res=>{
         this.products=res;
         this.productsLen= this.products[1];
        }
      });
      }



  removeItem(product:any){
    // this.cartService.removeCartItem(product);

  }

  removeAll(){
    // this.cartService.removeAll();
    console.log(this.products)
  }

  total:number=0;
   getTotal(){
    // this.total =this.cartService.getTotalPrice();
    let totl=0;

    for(let i=0;i<this.productsLen.length;i++){
      totl+=this.productsLen[i].price;
    }
    this.total=totl;
    localStorage.setItem('total',JSON.stringify(totl*80));
    return totl;
  }


  decriment(product:any){
    this.products= JSON.parse(localStorage.getItem("products") || "")
    this.products.map((a: any, index: number) => {

      if (product.id === a.id) {
        if(product.quintity<=1) this.cartService.removeCartItem(product);
        else{
        this.products[index].quintity--;
        this.products[index].total-=this.products[index].price;
        localStorage.setItem("products", JSON.stringify(this.products));
        window.location.reload();
        }

      }
    })
  }


  incriment(product:any){
    this.products= JSON.parse(localStorage.getItem("products") || "")
    this.products.map((a: any, index: number) => {

      if (product.id === a.id) {
        if(a.quintity<=1)this.cartService.removeCartItem(product);

        this.products[index].quintity++;
        this.products[index].total+=this.products[index].price;
        localStorage.setItem("products", JSON.stringify(this.products));
        window.location.reload();

      }
    })
  }


  checkoutProduct(){
    localStorage.setItem('checkout', JSON.stringify(this.productsLen));
  }

}
