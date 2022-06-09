import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-alladvertise',
  templateUrl: './alladvertise.component.html',
  styleUrls: ['./alladvertise.component.scss']
})
export class AlladvertiseComponent implements OnInit {

  //Array to store our properties data 
  properties: any[] = [];
  page = 1;
  propertiesToGet: number = 10;
  totalProperties: number | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProperties();
  }
  getProperties(){
    // Launch getProperties on init
    this.dataService.getProperties(this.propertiesToGet, this.page - 1)
    .subscribe((response: any) => {
      // save the amount of properties we get from api into the variable
      this.totalProperties = response.count;
      console.log("TOTAL PROPERTIES: " + this.totalProperties)
      response.results.forEach((result: any) => {
        this.dataService.getMoreData(result.city)
        .subscribe((uniqResponse: any) => {
          this.properties.push(uniqResponse); //We get data from every properties we have and push data into properties array
          console.log(this.properties);
          
          // dirty fix to sort properties by id
          this.properties.sort((a, b) => {
            return a.id - b.id;
          });
        });
      });
    })
  }

}
