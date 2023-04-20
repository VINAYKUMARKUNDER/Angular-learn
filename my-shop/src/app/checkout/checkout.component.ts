import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart/cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  constructor(private cartService:CartServiceService){}

  ngOnInit(): void {
      let val=(JSON.parse(localStorage.getItem('total')||"")).toFixed(2);
      this.total=val;
      let gs:number= ((this.total*18)/100);
      this.gst= gs;
      this.netTotal=Number(val)+Number(gs);
  }


  name: string = '';
  city: string = '';
  address: string = '';
  status:Boolean=true;


  conform() {

    if (this.name == "" || this.city == "" || this.address == "") {
      alert("Field All data maindotry")
    }
    else {
     if(this.status) this.payNow();

      let i = 0;
      setInterval(function () {

        if (i == 0) {
          alert("Your order is accepted")
        }
        i++;
        if (i == 3) {
          alert("Your order is being Prepared")
        }

        if (i == 8) {
          alert("Your order is being packed")
        }

        if (i == 10) {
          alert("Your order is out for delivery")
        }
        if (i == 12) {
          alert("Order delivered")

          window.location.href = "index.html"
        }


      }, 1000)

    }
  }


  total:number=0;
  cardHolder:string='';
  cardNumber:string='';
  expiry:string='';
  cvv:string='';

  gst:number=0;

  netTotal:number=0;

  payNow(){
    if(this.cardHolder==="" || this.cardNumber==='' || this.expiry==='' || this.cvv==='')
    alert('please fill all payment data cerefully...')

    else{
      this.status=false;
      alert('payment successfully...');
      this.cartService.removeAll();
    }
  }






}

