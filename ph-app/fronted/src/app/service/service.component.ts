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

  ngOnInit(): void {
    this.getAllMedicine();
  }

  URL: string = 'http://localhost:3000/api/v1/';

  getAllMedicine() {
    this.http.get(`${this.URL}medicine/`).subscribe((res) => {
      this.allMedicine = res;
      this.allMedicineSearchHelps = res;
      console.log(res)
    });

  }

  status: string = 'view';

  medicineCreate(data: {}) {
    // console.log(data);

    this.http.post(`${this.URL}medicine/`, data).subscribe((res) => {
      console.log(res);
      this.status = 'view'
    })
  }

  searchTerm: string = "";
  filteredItems: string[] = [];

  searchList() {
    // console.log(this.searchTerm)
    const allItem = this.filteredItems = this.allMedicineSearchHelps.filter((medicine: any) =>
      medicine.type.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    // console.log(allItem)
    this.allMedicine = allItem;
  }

  searchValue(value:string){
    this.searchTerm=value;
    this.searchList();
  }


  addProductInCart(product:any){
    this.cartService.addToCart(product);
  }


}
