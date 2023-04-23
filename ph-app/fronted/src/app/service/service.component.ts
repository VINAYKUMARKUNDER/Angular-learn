import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit{

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getAllMedicine();

  }

   URL:string= 'localhost:3000/api/v1/medicine/';

   getAllMedicine(){
      this.http.get(this.URL).subscribe((res)=>{
        console.log(res)
      });

   }

}
