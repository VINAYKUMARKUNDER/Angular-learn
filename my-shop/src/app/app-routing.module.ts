import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContectComponent } from './contect/contect.component';

const routes: Routes = [
  {
    component:ProductComponent,
    path:'products'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
