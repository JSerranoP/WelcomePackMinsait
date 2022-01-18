import { Pipe, PipeTransform } from '@angular/core';
import { SuperHero } from '../list/list.model';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(list: SuperHero[], page: number): SuperHero[] {
    return list.slice(page*24, page*24 + 24);
  }

}
