import { Pipe, PipeTransform } from '@angular/core';
import { SuperHero } from '../list/list.model';

@Pipe({
  name: 'filterNames'
})
export class FilterNamesPipe implements PipeTransform {

  transform(list: SuperHero[], filter: string = ''): SuperHero[] {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredList: SuperHero[] = list.filter((el: SuperHero) => {
      return el.name.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList;
  }

}
