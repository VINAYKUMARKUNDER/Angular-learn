import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  email:string ='';
  name:string ='';
  mobile:string ='';
  password:string ='';
  bio:string ='';
  address:string ='';

  user:any={
    email: this.email,
    name:this.name,
    mobile: this.mobile,
    password: this.password,
    bio:this.bio,
    address:this.address
  }

  userData:any = [];


  saveUserInfo(){
    console.log(this.user)
    localStorage.setItem("user", JSON.stringify(this.user));
    alert("user data save successfully!!")

  }




}
