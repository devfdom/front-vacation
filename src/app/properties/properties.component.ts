import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  //Array to store our properties data 
  public properties: properties[] = [];
  page = 1;
  propertiesToGet: number = 10;
  totalProperties: number | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProperties();
  }
  getProperties(){
    // Launch getProperties on init
    this.dataService.getProperties()
    .subscribe((response: properties[]) => {
      // save the amount of properties we get from api into the variable
      this.properties = response;
      console.log("TOTAL PROPERTIES: " + this.properties)
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    },
  )};
}




