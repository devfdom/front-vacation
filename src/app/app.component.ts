import { Component } from "@angular/core";
import { PropertiesService } from "./services/properties.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "properties x city";
  propertiesList: any = [
    "Property 1",
    "Property 2",
    "Property 3",
    "Property 4",
    "Property 5",
    "User 6",
    "Test",
    "TT",
  ];
  properties: any;

  constructor(private propertiesService: PropertiesService) {
    this.propertiesService.getProperties().subscribe((response: any) => {
      console.log(response);
      this.properties = response;
    });
  }
}
