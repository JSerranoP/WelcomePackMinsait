import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from './main-list/main-list.component';
import { CardComponent } from './main-list/card/card.component';
import { ListService } from './list.service';


@NgModule({
  declarations: [
    MainListComponent,
    CardComponent
  ],exports: [
    MainListComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ListService
  ]
})
export class ListModule { }
