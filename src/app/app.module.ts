import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlladvertiseComponent } from './alladvertise/alladvertise.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerComponent } from './owner/owner.component';
import { UserComponent } from './user/user.component';

import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    OwnerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'properties', component:AlladvertiseComponent},
      {path:'contact', component:ContactComponent},
      {path:'owner', component:OwnerComponent},
      {path:'user', component:UserComponent}
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
