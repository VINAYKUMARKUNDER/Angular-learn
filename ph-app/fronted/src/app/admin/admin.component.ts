import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private http: HttpClient) {}

  URL: string = 'http://localhost:3000/api/v1/';
  allMedicine: any = [];
  allMedicineSearchHelps: any = [];
  medicineId: number = 0;

  about: string = '';
  batchid: string = '';
  expdate: Date = new Date();
  mfgcompany: string = '';
  mfgdate: Date = new Date();
  numberOfItemInOneLeaf: number = 0;
  price: number = 0;
  productName: string = '';
  sellerId: number = 0;
  totalLeafInOneBox: number = 0;
  type: string = '';
  unit: number = 0;
  status: string = '';
  image: string = 'ab.png';
  getOneMedicine: any = {};
  getImageData: any = {};
  fetchAgen: Boolean = true;
  deleteId: number = 0;
  selectedFile: File | null = null;
  alertData:any=[];
  date:any=new Date().getTimezoneOffset();
  alertStatus:Boolean=true;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.getAllMedicine();
    this.expireProduct();
    this.status = 'view';
    console.log(this.date)
  }

  // view all medicine...
  getAllMedicine() {
    this.http.get(`${this.URL}medicine/`).subscribe((res) => {
      this.allMedicine = res;
      this.allMedicineSearchHelps = res;
      // console.log(res)
    });
  }

  clickStatusView(value: string) {
    this.status = value;
  }

  // create medicine...
  medicineCreate(data: {}) {
    let mewData: {} = { ...data, image: this.image };
    this.http.post(`${this.URL}medicine/`, mewData).subscribe({
      next:res=>alert('create new medicine'),
      error:err=>{alert('internal server error...')}
    });
  }

  // update medicine...
  medicineUpdate(data: {}) {
    if (Object.keys(data).length < 3 && this.medicineId > 0)
      this.http.get(`${this.URL}medicine/${this.medicineId}`).subscribe({
        next: (res) => {
          this.getOneMedicine = res;
          this.about = this.getOneMedicine.about;
          this.batchid = this.getOneMedicine.batchid;
          this.expdate = this.getOneMedicine.expdate;
          this.mfgcompany = this.getOneMedicine.mfgcompany;
          this.mfgdate = this.getOneMedicine.mfgdate;
          this.numberOfItemInOneLeaf =
            this.getOneMedicine.numberOfItemInOneLeaf;
          this.price = this.getOneMedicine.price;
          this.productName = this.getOneMedicine.productName;
          this.sellerId = this.getOneMedicine.sellerId;
          this.totalLeafInOneBox = this.getOneMedicine.totalLeafInOneBox;
          this.type = this.getOneMedicine.type;
          this.unit = this.getOneMedicine.unit;
        },
        error: (error) => {
          alert('Data is not found with id...');
        },
      });

    if (Object.keys(data).length > 3)
      this.http.put(`${this.URL}medicine/${this.medicineId}`, data).subscribe({
        next: (res) => {
          alert('updated successfully...');
        },
        error: (err) => {
          alert('some error in server...');
        },
      });
  }

  // delete data
  medicineDelete(data: string) {
    if (data == 'set' && this.medicineId > 0) {
      this.http.get(`${this.URL}medicine/${this.medicineId}`).subscribe({
        next: (res) => {
          this.getOneMedicine = res;
          this.about = this.getOneMedicine.about;
          this.batchid = this.getOneMedicine.batchid;
          this.expdate = this.getOneMedicine.expdate;
          this.mfgcompany = this.getOneMedicine.mfgcompany;
          this.mfgdate = this.getOneMedicine.mfgdate;
          this.numberOfItemInOneLeaf =
            this.getOneMedicine.numberOfItemInOneLeaf;
          this.price = this.getOneMedicine.price;
          this.productName = this.getOneMedicine.productName;
          this.sellerId = this.getOneMedicine.sellerId;
          this.totalLeafInOneBox = this.getOneMedicine.totalLeafInOneBox;
          this.type = this.getOneMedicine.type;
          this.unit = this.getOneMedicine.unit;
        },
        error: (error) => {
          alert('Data is not found with id...');
        },
      });
    } else if (data == 'delete')
      this.http.delete(`${this.URL}medicine/${this.medicineId}`).subscribe({
        next: (res) => alert('deleted successfully...'),
        error: (error) => alert('server error...'),
      });
  }

  update(id: number) {
    console.log(id);
    this.medicineId = id;
    this.clickStatusView('update');
    this.medicineUpdate({});
  }

  delete(id: number) {
    console.log(id);
    this.medicineId = id;
    this.clickStatusView('delete');
    this.medicineDelete('set');
  }

  accountCreate(data: any) {
    this.http.post(`${this.URL}seller/`, data).subscribe({
      next: (res) => alert('account created successfully...'),
      error: (error) => {
        if (error.status == 400) alert('email is already added in db...');
        else alert('Internal server error..');
      },
    });
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('image', this.selectedFile || '');

    this.http.post(`${this.URL}medicine/upload/`, formData).subscribe({
      next: (res) => {
        alert('image upload successfully..');
        this.getImageData = res;
        console.log(this.getImageData);

        this.image = this.getImageData.path;
      },
      error: (err) => {
        alert(err);
        console.log(err);
      },
    });
  }


  expireProduct(){
    this.http.get(`${this.URL}medicine/al/alert/`).subscribe({
      next:res=>{
        this.alertData=res;
        console.log(res)
      },
      error:err=>alert('enternoll error...')
    })

  }


  alertStatusHandler(){
      this.alertStatus=false;
  }


}
