// import { HttpErrorResponse } from '@angular/common/http';
// import { Component, OnInit, Input } from '@angular/core';
// import { Properties } from '../model/properties';
// import { ActivatedRoute, Router } from '@angular/router';
// import { PropertiesService } from '../services/properties.service';

// @Component({
//   selector: "app-properties-edit",
//   templateUrl: "./properties-edit.component.html",
//   styleUrls: ["./properties-edit.component.css"],
// })
// export class PropertiesEditComponent implements OnInit {
//   properties: Properties | undefined;
//   propertyId: number = 1;

//   @Input() propertiesData: any = {
//     properties_photo: "",
//     properties_city: "",
//     properties_bedrooms: 0,
//     properties_capacity: 0,
//     properties_pool: false,
//     properties_garden: false,
//     properties_description: "",
//     properties_pricePerNight: 0,
//   };

//   constructor(
//     public prop: PropertiesService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.getProperty();
//   }

//   public getProperty(): void {
//     this.prop.idProperty(this.propertyId).subscribe({
//       next: (response: Properties) => {
//         this.properties = response;
//         console.log(this.properties);
//       },
//       error: (error: HttpErrorResponse) => {
//         alert(error.message);
//       },
//     });
//   }

//   updateProperty(): void {
//     this.prop.updateProperty(this.propertyId, this.propertiesData).subscribe(
//       (result) => {
//         this.router.navigate(["/properties-edit/", result._id]);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }
// } 
// import { HttpErrorResponse } from '@angular/common/http';
// import { Component, OnInit, Input } from '@angular/core';
// import { Properties } from '../model/properties';
// import { ActivatedRoute, Router } from '@angular/router';
// import { PropertiesService } from '../services/properties.service';
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