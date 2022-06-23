import { HttpErrorResponse } from '@angular/common/http';

import { Input, OnInit } from '@angular/core';

import { PropertiesService }  from '../services/properties.service';
import { Properties } from '../model/properties';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: "app-properties-detail",
  templateUrl: "./properties-detail.component.html",
  styleUrls: ["./properties-detail.component.css"],
})
export class PropertiesDetailComponent implements OnInit {
  properties!: Properties;
  propertiesId: string="0";

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
    this.propertiesId=(this.Location.path().toString().replace("/properties-details?id=",""))
    this.getProperty();
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
}}
