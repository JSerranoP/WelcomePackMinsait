import { NgModule } from '@angular/core';
import { FilterNamesPipe } from './pipes/filter-names.pipe';
import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
  imports: [],
  declarations: [
    FilterNamesPipe,
    PaginatePipe
  ],
  exports: [
    FilterNamesPipe,
    PaginatePipe
  ]
})
export class AppPipesModule { }