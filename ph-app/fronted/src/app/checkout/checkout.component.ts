import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  products:any=[];
  URL: string = 'http://localhost:3000/api/v1/';

  ngOnInit(): void {
      this.products= JSON.parse(localStorage.getItem('checkout')||"")
      console.log(new Date().toISOString())
  }

  constructor(private http:HttpClient){}


  goToHistory(){
     for(let i=0;i<this.products[1].length;i++){
      let data={
        customerId:this.products[0][0].id,
        medicineId:this.products[1][i].id,
        // OrderDate:new Date()
      }

      // console.log(this.products[0][0].id)
      this.http.post(`${this.URL}order/`,data).subscribe({
        next:res=>console.log(res),
        error:err=>alert('dublicate entry...')
      })
     }

     this.http.delete(`${this.URL}cart/`).subscribe({
      next:res=>{
        alert(res)
      }
     })
  }

}
