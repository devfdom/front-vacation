import { PropertiesService } from './services/properties.service';
import { Component, OnInit } from "@angular/core";
import { constructor } from 'jasmine';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [PropertiesService]
})
export class AppComponent implements OnInit {
  title = 'properties';
  public properties: Array<any> = []
  filterText: string = '';

  }

  constructor(private propertiesService: PropertiesService){

  }

