import { UserLoginComponent } from './user-login/user-login.component';

import { NgModule } from "@angular/core";
import { PropertiesComponent } from "./properties/properties.component";
import { PropertiesDetailComponent } from "./properties-detail/properties-detail.component";
import { PropertiesAddComponent } from "./properties-add/properties-add.component";
import { PropertiesEditComponent } from "./properties-edit/properties-edit.component";

import { BookingComponent } from "./booking/booking.component";
import { RouterModule, Routes } from "@angular/router";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  { path: "login", component: UserLoginComponent, pathMatch: "full" },
  {path: "register", component: UserRegisterComponent},
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "properties",
    component: PropertiesComponent,
    data: { title: "Properties List" },
  },
  {
    path: "properties-details",
    component: PropertiesDetailComponent,
    data: { title: "Properties Details" },
  },
  {
    path: "properties-add",
    component: PropertiesAddComponent,
    data: { title: "Properties Add" },
  },
  {
    path: "properties-edit/:id",
    component: PropertiesEditComponent,
    data: { title: "Properties Edit" },
  },
  { path: "", redirectTo: "/properties", pathMatch: "full" },
  {
    path: "booking",
    component: BookingComponent,
    data: { title: "Booking List" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
