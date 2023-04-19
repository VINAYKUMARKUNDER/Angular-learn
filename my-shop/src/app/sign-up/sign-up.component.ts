import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  userData:any = [];

  ngOnInit(): void {
     this.userData= JSON.parse(localStorage.getItem('user')|| "");
  }

  email:string ='';
  name:string ='';
  mobile:string ='';
  password:string ='';
  bio:string ='';
  address:string ='';






  saveUserInfo(){
  let  user={
    email: this.email,
    name:this.name,
    mobile: this.mobile,
    password: this.password,
    bio:this.bio,
    address:this.address
  }
  this.userData.push(user);
    console.log(this.userData)

    localStorage.setItem("user", JSON.stringify(this.userData));
    alert("user data save successfully!!")
    location.href=('/login')

  }




}
