import { HttpErrorResponse } from '@angular/common/http';
import { Properties } from './../model/properties';
import { Component, OnInit } from '@angular/core';
import {PropertiesService} from '../services/properties.service';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  //Array to store our properties data 
  public properties: Properties[] = [];
  page = 1;
  propertiesToGet: number = 9;
  totalProperties: number | undefined;

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.getProperties();
  }
  
  public getProperties(): void {
    // Launch getProperties on init
    this.propertiesService.getProperties()
    .subscribe((response: Properties[]) => {
      // save the amount of properties we get from api into the variable
      this.properties = response;
      console.log(this.properties)
    },
    /*error: (error: HttpErrorResponse) => {
      alert(error.message);
    }*/
  )};
}




