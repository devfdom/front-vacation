import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { FilterCityPipe } from "./filter-city.pipe";
import { HomeComponent } from "./home/home.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OwnerComponent } from "./owner/owner.component";
import { UserComponent } from "./user/user.component";

import { HttpClientModule } from "@angular/common/http";
import { BookingComponent } from "./booking/booking.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PropertiesComponent } from "./properties/properties.component";

import { FormsModule } from "@angular/forms";
import { FilterDatePipe } from "./filter-date.pipe";
import { FiltersComponent } from "./filters/filters.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    OwnerComponent,
    UserComponent,
    HomeComponent,
    HeaderComponent,
    PropertiesComponent,
    BookingComponent,
    FiltersComponent,
    FilterDatePipe,
    FilterCityPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "contact", component: ContactComponent },
      { path: "owner", component: OwnerComponent },
      { path: "", component: HomeComponent },
      { path: "user", component: UserComponent },
      { path: "properties", component: PropertiesComponent },
      { path: "booking", component: BookingComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
