import { Component, OnInit, Input } from '@angular/core';
import { PropertiesService } from '../properties.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-properties-edit',
  templateUrl: './properties-edit.component.html',
  styleUrls: ['./properties-edit.component.css']
})
export class PropertiesEditComponent implements OnInit {

  @Input() propertiesData: any = { properties_city: '', properties_bedrooms: 0, properties_capacity: 0, properties_poll: false, properties_garden: false, properties_description:'', properties_pricePerNight: 0,};

  constructor(public property: PropertiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.property.getProperties(this.route.snapshot.params.id).subscribe((data: {}) => {
      console.log(data);
      this.propertiesData = data;
    });
  }

  updateProperties(): void {
    this.properties.updateProperties(this.route.snapshot.params.id, this.propertiesData).subscribe((result) => {
      this.router.navigate(['/properties-details/' + result._id]);
    }, (err) => {
      console.log(err);
    });
  }


}
