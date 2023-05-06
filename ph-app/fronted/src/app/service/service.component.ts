import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart/cart-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private cartService: CartServiceService
  ) {}

  allMedicine: any = [];
  allMedicineSearchHelps: any = [];
  popup: any = '';
  leaf:any='';
  viewProduct: any = '';
  viewPopup: any = '';
  getOneMedicine: any = {};
  URL: string = 'http://localhost:3000/api/v1/';
  status: string = 'view';
  searchTerm: string = '';
  filteredItems: string[] = [];
  numberOfLeaf:Number=0;
  medicineId:number=0;

  ngOnInit(): void {
    this.getAllMedicine();
    this.popup = document.getElementById('popup');
    this.leaf = document.getElementById('leaf');
    this.viewPopup = document.getElementById('view-pop');
  }



  // get all medicine
  getAllMedicine() {
    this.http.get(`${this.URL}medicine/`).subscribe((res) => {
      this.allMedicine = res;
      this.allMedicineSearchHelps = res;
    });
  }


// create new medicine
  medicineCreate(data: {}) {
    this.http.post(`${this.URL}medicine/`, data).subscribe((res) => {
      this.status = 'view';
    });
  }



// serch medicine function
  searchList() {
    const allItem = (this.filteredItems = this.allMedicineSearchHelps.filter(
      (medicine: any) =>
        medicine.type.toLowerCase().includes(this.searchTerm.toLowerCase())
    ));
    this.allMedicine = allItem;
  }




// serch medicine function
  searchValue(value: string) {
    this.searchTerm = value;
    this.searchList();
  }




  // add to cart function
  addProductInCart(id: Number) {
    this.http.get(`${this.URL}medicine/${id}`).subscribe({
      next: (res) => {
        this.getOneMedicine = res;
        this.getOneMedicine.customerId = 1;
        let leaf= this.getOneMedicine.totalLeafInOneBox;
        const unit = Math.floor((this.numberOfLeaf as number) / (leaf as number));
        const cartLeaf = (this.numberOfLeaf as number-(leaf*unit));
        this.getOneMedicine.unit=unit;
        this.getOneMedicine.totalLeafInOneBox=cartLeaf;
        this.getOneMedicine.medicineId = this.getOneMedicine.id;
        delete this.getOneMedicine.id;


        let data ={
          customerId:this.getOneMedicine.customerId,
          medicineId:this.medicineId
        }




        this.http
          .post(`${this.URL}medicinehistory/`, this.getOneMedicine)
          .subscribe({
            next: (res) => {
            },
            error: (err) => {},
          });

          this.http
          .post(`${this.URL}cart/`, data)
          .subscribe({
            next: (res) => {
              console.log(res)
            },
            error: (err) => {console.log(res)},
          });
      },
      error: (err) => {},
    });
  }


  updateMedicineId(id:number){
    this.medicineId=id;
    this.openLeafPopUp();
  }

  // view details function
  viewDetails(product: {}) {
    this.viewProduct = product;
    this.status = 'view-details';
  }



  changeStatus(status: string) {
    this.status = status;
  }


  // add cart popup open
  openPopUp = () => {
    this.popup.classList.add('popup-open');
  };

  openLeafPopUp = () => {
    this.leaf.classList.add('leaf-open');
  };

   // add cart popup close
   closeLeafPopUp = () => {
    this.leaf.classList.remove('leaf-open');
    this.addProductInCart(this.medicineId);
    this.openPopUp();
    this.status = 'view';
  };


  // add cart popup close
  closePopUp = () => {
    this.popup.classList.remove('popup-open');
    this.status = 'view';
  };



  // open view detail popup
  openViewPopUp = () => {
    console.log(this.viewPopup);
    this.viewPopup.classList.add('popup-open');
  };


  // close view detail popup
  closeViewPopUp = () => {
    this.viewPopup.classList.remove('popup-open');
  };



}
