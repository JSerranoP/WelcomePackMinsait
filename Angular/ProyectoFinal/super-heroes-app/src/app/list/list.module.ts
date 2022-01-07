import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from './main-list/main-list.component';
import { CardComponent } from './main-list/card/card.component';
import { ListService } from './list.service';
import { AppPipesModule } from '../app-pipes.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainListComponent,
    CardComponent
  ],exports: [
    MainListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AppPipesModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    ListService
  ]
})
export class ListModule { }
