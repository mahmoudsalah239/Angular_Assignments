import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MobilesComponent } from './Components/mobiles/mobiles.component';
import { LaptopsComponent } from './Components/laptops/laptops.component';
import { TVsComponent } from './Components/tvs/tvs.component';
import { PcsComponent } from './Components/pcs/pcs.component';
import { StationComponent } from './Components/station/station.component';
import { CarsComponent } from './Components/cars/cars.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'Products',
    component: ProductsComponent,
    children: [
      { path: 'mobiles', component: MobilesComponent },
      { path: 'Laptops', component: LaptopsComponent },
      { path: 'Tvs', component: TVsComponent },
      { path: 'PCS', component: PcsComponent },
      { path: 'station', component: StationComponent },
      { path: 'cars', component: CarsComponent },
    ],
  },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Users', component: UsersComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
