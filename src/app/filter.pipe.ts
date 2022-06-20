import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCities'
})
export class FilterCitiesPipe implements PipeTransform {

  transform(items: Array<City>, categoryToSearch: string =''): Array<any> {
    console.log()

    return (items);
  }
  return items.filter(({ City }) => City === CityToSearch);

}
