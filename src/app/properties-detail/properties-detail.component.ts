import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PropertiesService }  from '../services/properties.service';
import { Properties } from '../model/properties';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-properties-detail",
  templateUrl: "./properties-detail.component.html",
  styleUrls: ["./properties-detail.component.css"],
})
export class PropertiesDetailComponent implements OnInit {
  properties: Properties | undefined;
  propertyId: number = 0 ;

  constructor(
    public propertyService: PropertiesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.propertyService.idProperty(1).subscribe({
    //   next: (response: Properties) => {
    //     this.properties = response;
    //     console.log(this.properties);
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   },
    // });
    this.getProperty();
  }

  public getProperty(): void {
    this.propertyService.idProperty(this.propertyId).subscribe({
      next: (response: Properties) => {
        this.properties = response;
        console.log(this.properties);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}


