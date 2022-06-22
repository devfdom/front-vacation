import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { FiltersComponent } from "./filters/filters.component";
import { PropertiesComponent } from "./properties/properties.component";
import { PropertiesAddComponent } from "./properties-add/properties-add.component";
import { PropertiesDetailComponent } from "./properties-detail/properties-detail.component";
import { PropertiesEditComponent } from "./properties-edit/properties-edit.component";
import { BookingComponent } from "./booking/booking.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    BookingComponent,
    FiltersComponent,
    PropertiesAddComponent,
    PropertiesDetailComponent,
    PropertiesEditComponent,
    //maybe I should put the PropertiesDeteil and Edit here
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
