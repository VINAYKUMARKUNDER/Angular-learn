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
  productsLen:any=[];
  updatedMedicineProduct:any={};

  ngOnInit(): void {
      this.products= JSON.parse(localStorage.getItem('checkout')||"")
  }

  constructor(private http:HttpClient){}


  goToHistory(){
     for(let i=0;i<this.products[1].length;i++){
      let data={
        customerId:this.products[0][0].id,
        medicineId:this.products[1][i].id,
      }

      this.http.get(`${this.URL}cart/${1}`).subscribe({
        next:res=>{
         this.products=res;
         this.productsLen= this.products[1];
         console.log(this.productsLen)
        }
      });

      // this.http.post(`${this.URL}order/`,data).subscribe({
      //   next:res=>{


      //   },
      //   error:err=>alert('dublicate entry...')
      // })
     }

    //  this.http.delete(`${this.URL}cart/`).subscribe({
    //   next:res=>{

    //     alert(res)
    //   }
    //  })
  }



  updatedMedicine(){
    for(let i =0; i< this.productsLen.length;i++){
      this.http.get(`${this.URL}medicine/${this.productsLen[i].medicineId}`).subscribe({
        next:res=>{
          console.log(res)
          this.updatedMedicineProduct=res;
          this.updatedMedicineProduct.unit-=this.productsLen[i].unit;
          this.updatedMedicineProduct.totalLeafInOneBox-=this.productsLen[i].totalLeafInOneBox;

          console.log(this.updatedMedicine)
          // this.http.put(`${this.URL}/medicine/`, this.updatedMedicineProduct).subscribe({
          //   next:res=>{

          //   }
          // })
        }
      })
    }

  }

}
