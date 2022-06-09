import { RouterModule } from '@angular/router';
import { AlladvertiseComponent } from './alladvertise/alladvertise.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{
      path:'properties', component:AlladvertiseComponent
    }])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }