import { Component, OnInit } from '@angular/core';
import { PropertiesService }  from '../services/properties.service';
import { Properties } from '../model/properties';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-properties-detail',
  templateUrl: './properties-detail.component.html',
  styleUrls: ['./properties-detail.component.css']
})
export class PropertiesDetailComponent implements OnInit {

  properties: Properties | undefined;

  constructor(public property: PropertiesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.property.getProperty(this.route.snapshot.params.id).subscribe(
      (data: Properties) => this.properties = { ...data }
    );
  }

}
