import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminComponent } from './admin/admin.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    component:ServiceComponent,
    path:'service'
  },
  {
    component:HomePageComponent,
    path:''
  },
  {
    component:AdminComponent,
    path:'admin'
  },
  {
    component:InvoiceComponent,
    path:'invoice'
  },
  {
    component:CartComponent,
    path:'cart'
  },
  {
    component:ViewComponent,
    path:'view'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
