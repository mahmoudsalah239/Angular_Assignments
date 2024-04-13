import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    SideMenuComponent,
    NotfoundComponent,
    AboutComponent,
    ContactComponent,
    MobilesComponent,
    LaptopsComponent,
    TVsComponent,
    PcsComponent,
    StationComponent,
    CarsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
