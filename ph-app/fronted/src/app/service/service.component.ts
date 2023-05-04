import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart/cart-service.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private http: HttpClient, private cartService:CartServiceService) { }

  allMedicine: any = [];
  allMedicineSearchHelps: any = [];
  popup:any=''
  viewProduct:any='';
  viewPopup:any='';

  ngOnInit(): void {
    this.getAllMedicine();
    this.popup= document.getElementById('popup');
    this.viewPopup=document.getElementById('view-pop');
    console.log(this.viewPopup)
  }

  URL: string = 'http://localhost:3000/api/v1/';

  getAllMedicine() {
    this.http.get(`${this.URL}medicine/`).subscribe((res) => {
      this.allMedicine = res;
      this.allMedicineSearchHelps = res;
    });

  }

  status: string = 'view';

  medicineCreate(data: {}) {

    this.http.post(`${this.URL}medicine/`, data).subscribe((res) => {
      this.status = 'view'
    })
  }

  searchTerm: string = "";
  filteredItems: string[] = [];

  searchList() {
    const allItem = this.filteredItems = this.allMedicineSearchHelps.filter((medicine: any) =>
      medicine.type.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.allMedicine = allItem;
  }

  searchValue(value:string){
    this.searchTerm=value;
    this.searchList();
  }


  addProductInCart(product:any){
    // let res= this.cartService.addToCart(product);
    this.http.post(`${this.URL}cart/`,product).subscribe({
      next:res=>{
        alert(res)
      console.log(res)
    },
      error:err=> {alert(err)
      console.log(err)}
    })
  }



  viewDetails(product:{}){
    this.viewProduct=product;
    this.status = 'view-details'
  }


  changeStatus(status:string){
      this.status=status;
  }





  openPopUp=()=>{

    this.popup.classList.add("popup-open")
  }

  closePopUp=()=>{
    this.popup.classList.remove("popup-open")
  }


  openViewPopUp=()=>{
    console.log(this.viewPopup)
    this.viewPopup.classList.add("popup-open")
  }

  closeViewPopUp=()=>{
    this.viewPopup.classList.remove("popup-open")
  }




}
