import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    component:ServiceComponent,
    path:'service'
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
