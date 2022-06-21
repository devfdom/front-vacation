import { Component } from "@angular/core";
import { PropertiesService } from "./services/properties.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "properties";
  public properties: Array<any> = [];

  constructor(private propertiesService: PropertiesService) {
    this.propertiesService.getProperties().subscribe((response: any) => {
      console.log(response);
      this.properties = response;
    });
  }
}
