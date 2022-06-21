// import { Properties } from './model/properties';
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filterCities'
// })
// export class FilterCitiesPipe implements PipeTransform {

//   transform(properties: Properties[], filterText: String){
//     if(properties.length === 0 || filterText === ''){
//       return properties;
//     } else {
//       return properties.filter((properties) =>
//       {
//         return properties.City.toLowerCase() === filterText.toLowerCase()
//       })
//     }
//   }
// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: any[], text: string): any[] {

        if (!items) { return []; }

        if (!text) { return items; }

        text = text.toLowerCase();
        return items.filter(x => {
            return x.toLowerCase().includes(text);
        });
    }
}

