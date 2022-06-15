
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EachadvertisementComponent } from './eachadvertisement/eachadvertisement.component';




@NgModule({
  declarations: [
    AppComponent,
    EachadvertisementComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'infoproperty', component:EachadvertisementComponent},
     
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
