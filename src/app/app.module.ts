import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OwnerComponent } from "./owner/owner.component";
import { UserComponent } from "./user/user.component";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    OwnerComponent,
    UserComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "contact", component: ContactComponent },
      { path: "owner", component: OwnerComponent },
      { path: "", component: HomeComponent },
      { path: "user", component: UserComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
