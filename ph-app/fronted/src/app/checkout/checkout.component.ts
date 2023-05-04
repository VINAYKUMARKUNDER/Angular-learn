import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  products:any=[];

  ngOnInit(): void {
      this.products= JSON.parse(localStorage.getItem('checkout')||"")
      console.log(this.products)
  }

  constructor(){}

}
