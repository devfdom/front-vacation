import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Properties } from '../model/properties';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-properties-edit',
  templateUrl: './properties-edit.component.html',
  styleUrls: ['./properties-edit.component.css']
})
export class PropertiesEditComponent implements OnInit {

  properties: Properties | undefined;
  propertyId: number = 1;

  @Input() propertiesData: any = { properties_city: '', properties_bedrooms: 0, properties_capacity: 0, properties_poll: false, properties_garden: false, properties_description:'', properties_pricePerNight: 0,};

  constructor(public prop: PropertiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getProperty();
  }

  public getProperty():void {
    this.prop.idProperty(this.propertyId).subscribe({
      next:(response:Properties)=>{
        this.properties = response;
        console.log(this.properties);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    }
    );   
  }

  // updateProperty(id: number){
  //   this.prop.updateProperty(this.propertyId), this.propertiesData).subscribe((result) => {
  //     this.router.navigate(['/properties-details/' + result._id]);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
} 