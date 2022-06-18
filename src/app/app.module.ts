import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { PropertiesComponent } from './properties/properties.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
   /* AppRoutingModule,
    RouterModule.forRoot([
      {path:'properties', component:PropertiesComponent},
      {path:'booking', component:BookingComponent}
    ])*/
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }