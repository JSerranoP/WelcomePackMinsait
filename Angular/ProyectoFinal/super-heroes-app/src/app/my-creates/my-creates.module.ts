import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMyCreatesComponent } from './main-my-creates/main-my-creates.component';
import { MyCreatesService } from './my-creates.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainMyCreatesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    MyCreatesService
  ]
})
export class MyCreatesModule { }
