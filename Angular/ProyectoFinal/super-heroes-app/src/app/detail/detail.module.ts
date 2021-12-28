import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDetailComponent } from './main-detail/main-detail.component';
import { BiographyComponent } from './main-detail/biography/biography.component';
import { PowerstatsComponent } from './main-detail/powerstats/powerstats.component';
import { WorkComponent } from './main-detail/work/work.component';
import { ImageComponent } from './main-detail/image/image.component';



@NgModule({
  declarations: [
    MainDetailComponent,
    BiographyComponent,
    PowerstatsComponent,
    WorkComponent,
    ImageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetailModule { }
