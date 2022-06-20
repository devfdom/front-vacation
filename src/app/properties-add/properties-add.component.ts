import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from '../services/properties.service';



@Component({
  selector: 'app-properties-add',
  templateUrl: './properties-add.component.html',
  styleUrls: ['./properties-add.component.css']
})
export class PropertiesAddComponent implements OnInit {

  @Input() propertiesData = {properties_photo:'', properties_city: '', properties_bedrooms: 0, properties_capacity: 0, properties_pool: false, properties_garden: false, properties_description:'', properties_pricePerNight: 0};

  constructor(public properties: PropertiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addProperty():void{
    this.properties.addProperty(this.propertiesData).subscribe((result)=>{
      this.router.navigate([`/properties-details`,result._id]);
    },(err)=>{
      console.log(err);
    });
  }

}
