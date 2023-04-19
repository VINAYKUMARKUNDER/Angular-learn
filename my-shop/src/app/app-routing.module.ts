import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContectComponent } from './contect/contect.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    component:ProductComponent,
    path:'products'
  },

  {
    component:CartComponent,
    path:'cart'
  },

  {
    component:LoginComponent,
    path:'login'
  },

  {
    component:ContectComponent,
    path:'contect'
  },
  {
    component:HomePageComponent,
    path:''
  },
  {
    component:ViewComponent,
    path:'view'
  },
  {
    component:SignUpComponent,
    path:'signup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
