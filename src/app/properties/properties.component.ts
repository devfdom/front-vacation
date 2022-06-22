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
  //Array to store our properties data
  public properties: Properties[] = [];
  // currentProperty : Properties ={
  //   id: 0,
  //   photo: "",
  //   bedrooms: 0,
  //   capacity: 0,
  //   city: 0,
  //   garden: false,
  //   pool: false,
  //   description: "",
  //   pricePerNight: 0,
  //   booked: Booked,
  // }; 

  //added now
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

  // getProperty(id: number):void{
  //   this.propertiesService.getProperty(id).subscribe((resp: any)=>{
  //     this.properties =resp ;
  //     this.propertiesService.property =resp;
  //     console.log(this.properties)
  //   })
  // }

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

  /*page = 1;
  propertiesToGet: number = 9;
  totalProperties: number | undefined;*/

  /*
  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.getProperties();
  }
  
  public getProperties(): void {
    // Launch getProperties on init
    this.propertiesService.getProperties().subscribe({
      next: (response: Properties[]) => {
        this.properties = response;
        console.log(this.properties);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }*/
}
