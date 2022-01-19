import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormComponent } from './main-form/main-form.component';
import { FormService } from './form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';

@NgModule({
  declarations: [
    MainFormComponent
  ],exports: [
    MainFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule
  ],
  providers: [
    FormService
  ]
})
export class FormModule { }
