import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FiltersComponent } from './filters/filters.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertiesAddComponent } from './properties-add/properties-add.component';
import { PropertiesDetailComponent } from './properties-detail/properties-detail.component';
import { PropertiesEditComponent } from './properties-edit/properties-edit.component';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    BookingComponent,
    FiltersComponent,
    PropertiesAddComponent,
    //maybe I should put the PropertiesDeteil and Edit here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'properties', component:PropertiesComponent},
      {path:'propertiesAdd', component:PropertiesAddComponent},
      {path:'propertiesDetail', component:PropertiesDetailComponent},
      {path:'propertiesEdit', component:PropertiesEditComponent},
      {path:'booking', component:BookingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
