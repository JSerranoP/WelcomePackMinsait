import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from './main-list/main-list.component';
import { CardComponent } from './main-list/card/card.component';



@NgModule({
  declarations: [
    MainListComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListModule { }
