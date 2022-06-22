import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Input, OnInit } from '@angular/core';

import { PropertiesService }  from '../services/properties.service';
import { Properties } from '../model/properties';
import { Component } from '@angular/core';
import { Location } from '@angular/common';



@Component({
  selector: "app-properties-detail",
  templateUrl: "./properties-detail.component.html",
  styleUrls: ["./properties-detail.component.css"],
})
export class PropertiesDetailComponent implements OnInit {
  //property:Properties;
  properties!: Properties;
  propertiesId: string="0";
 

  //public properties: Properties[] = [];

  //added now
  selectedProperties?: Properties;
  onSelect(property: Properties): void {
  this.selectedProperties = property;
  }

  constructor(
    public propertyService: PropertiesService,
    private route: ActivatedRoute,
    private router: Router,
    private Location: Location
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
    

    // this.route.queryParams.subscribe(params => {
    //   this.id = params['id'];
    // });


    // this.propertyService.getProperty(this.route.snapshot.params['id']).subscribe(data:Property)=> this.property = {...data};
    
    this.propertiesId=(this.Location.path().toString().replace("/properties-details?id=",""))
    this.getProperty();

    //   this.route.params.subscribe(
    //     (params: any) => {
    //       this.id =  params['id'];
      
    //     });
    
    //  this.properties=this.propertyService.property;

  }

  getProperty():void{
    this.propertyService.getProperty(Number(this.propertiesId)).subscribe({
      next: (resp: Properties)=>{
        this.properties = resp;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });

  // public getProperty(): void {
  //   this.propertyService.idProperty(this.propertyId).subscribe({
  //     next: (response: Properties) => {
  //       this.properties = response;
  //       console.log(this.properties);
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     },
  //   });
  // }
}}
