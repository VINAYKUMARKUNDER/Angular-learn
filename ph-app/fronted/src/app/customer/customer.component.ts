import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  constructor(private http:HttpClient){}
  URL: string = 'http://localhost:3000/api/v1/';
  massege:string='';
  popup:any='';
  status:Boolean=true;
  products:any=[];

  ngOnInit(): void {

    this.popup=document.getElementById('popup');
  }


  accountCreate(data: any) {
    this.http.post(`${this.URL}customer/`, data).subscribe({
      next: (res) => {
        this.status=true;
        this.massege=('account created successfully...')
      },
      error: (error) => {
        if (error.status == 400) this.massege=('email is already added in db...');
        else this.massege=('Internal server error..');

        this.status=false;
      },
    });
  }



  openPopUp=()=>{
    this.popup.classList.add("popup-open")
  }

  closePopUp=()=>{
    this.popup.classList.remove("popup-open")
  }

  getAllOrder(){
    this.http.get(`${this.URL}order/1`).subscribe({
      next:res=>{
        this.products=res
      },
    })
  }


  cancelOrder(product:any){

  }

}
