import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerComponent } from './owner/owner.component';
@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'owner', component:OwnerComponent},
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }