import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMyCreatesComponent } from './main-my-creates/main-my-creates.component';
import { MyCreatesService } from './my-creates.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateMyCreatesComponent } from './update-my-creates/update-my-creates.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainMyCreatesComponent,
    UpdateMyCreatesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    MyCreatesService
  ]
})
export class MyCreatesModule { }
