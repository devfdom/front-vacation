import { Properties } from './model/properties';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCities'
})
export class FilterCitiesPipe implements PipeTransform {

  transform(properties: Properties[], filterText: String){
    if(properties.length === 0 || filterText === ''){
      return properties;
    } else {
      return properties.filter((properties) =>
      {
        return properties.City.toLowerCase() === filterText.toLowerCase()
      })
    }
  }
}
