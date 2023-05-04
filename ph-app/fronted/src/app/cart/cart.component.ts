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

  public products : any= [];
  status:Boolean=false;

  public grandTotal : number = 0;
  URL: string = 'http://localhost:3000/api/v1/';

  ngOnInit(): void{
    this.getAllCartData();
    try {
      this.products=JSON.parse(localStorage.getItem('products') || '');
    } catch (error) {}
        console.log(this.products)
    }


      getAllCartData(){
        this.http.get(`${this.URL}cart/1`).subscribe({
          next:res=>{
            console.log(res)
            this.products=res;
          },
          error:err=> console.log(err)
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

}
