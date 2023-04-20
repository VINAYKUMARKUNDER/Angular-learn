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


      this.grandTotal = this.cartService.getTotalPrice();
    });


    this.products= JSON.parse(localStorage.getItem("products") || "")

    // console.log(this.products)


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


