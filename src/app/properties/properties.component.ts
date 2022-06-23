import { HttpErrorResponse } from "@angular/common/http";
import { Properties } from "./../model/properties";
import { Component, OnInit } from "@angular/core";
import { PropertiesService } from "../services/properties.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-properties",
  templateUrl: "./properties.component.html",
  styleUrls: ["./properties.component.css"],
})
export class PropertiesComponent implements OnInit {

  public properties: Properties[] = [];

  selectedProperties?: Properties;
  onSelect(property: Properties): void {
  this.selectedProperties = property;
  }

  constructor(public propertiesService: PropertiesService, private router: Router) {}

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.propertiesService.getProperties().subscribe((resp: any) => {
      this.properties = resp;
      console.log(this.properties);
    });
  }

  add(): void {
    this.router.navigate(["/properties-add"]);
  }

  delete(id: number): void {
    this.propertiesService.deleteProperty(id).subscribe(
      () => {
        this.getProperties();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
