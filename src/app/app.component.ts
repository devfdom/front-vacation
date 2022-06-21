import { Component } from "@angular/core";



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // providers: [PropertiesService]
})
export class AppComponent {
  title = 'properties x city';
  propertiesList: any = ["Property 1", "Property 2", "Property 3", "Property 4", "Property 5", "User 6", "Test", "TT"];

  }


