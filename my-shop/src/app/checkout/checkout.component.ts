import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {


  name: string = '';
  city: string = '';
  address: string = '';



  conform() {

    if (this.name == "" || this.city == "" || this.address == "") {
      alert("Field All data maindotry")
    }
    else {
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


}

