import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { PropertiesService } from '../services/properties.service';



@Component({
  selector: "app-properties-add",
  templateUrl: "./properties-add.component.html",
  styleUrls: ["./properties-add.component.css"],
})
export class PropertiesAddComponent implements OnInit {
  @Input() propertiesData = {
    photo: "",
    city: "",
    bedrooms: 0,
    capacity: 0,
    pool: false,
    garden: false,
    description: "",
    pricePerNight: 0,
  };

  constructor(
    public propertiesService: PropertiesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addProperty(): void {
    console.log(this.propertiesData)
    this.propertiesService.addProperty(this.propertiesData).subscribe(
      (result) => {
        this.router.navigate([`/properties-details`, result._id]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
