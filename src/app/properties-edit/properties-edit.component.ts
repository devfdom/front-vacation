import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from '../services/properties.service';


@Component({
  selector: "app-properties-edit",
  templateUrl: "./properties-edit.component.html",
  styleUrls: ["./properties-edit.component.css"],
})
export class PropertiesEditComponent implements OnInit {

    @Input() propertiesData: any = {
    id: this.route.snapshot.params['id'],
    photo: '',
    city: '',
    bedrooms: 0,
    capacity: 0,
    pool: false,
    garden: false,
    description:'',
    pricePerNight: 0,
  };

  constructor(public propertiesService: PropertiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.propertiesService.getProperty(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.propertiesData = data;
    });
  }

  updateProperty(): void {
    console.log(this.propertiesService)
    this.propertiesService.updateProperty(this.route.snapshot.params['id'], this.propertiesData).subscribe((result) => {
      this.router.navigate(['/properties-details/',result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}