import { PropertiesService } from './services/properties.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-vacation';

  constructor( private propertiesService: PropertiesService){
   
  }
}
