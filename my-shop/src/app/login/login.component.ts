import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userData:any = [];

  ngOnInit(): void {
    this.userData= JSON.parse(localStorage.getItem('user')|| "");
    localStorage.setItem('login', JSON.stringify(false));
  }

  status:Boolean=false;
  email:string='';
  password:string ='';

  login(){
    if(this.userData.length===0){
      alert("SignUp First!!")
      location.href='/signup'
    }
    this.userData.map((a: any) => {
      if (this.email=== a.email && this.password==a.password) {
        this.status=true;
       alert("Login successfully!!");
       localStorage.setItem('login',JSON.stringify(true));
       location.href = "/products"
      }
    })

    if(JSON.parse(localStorage.getItem('login')||"")===false){

      alert("User id or Password Invalid!!")
      this.status=false;
      location.href=('/signup')
    }


  }

}
