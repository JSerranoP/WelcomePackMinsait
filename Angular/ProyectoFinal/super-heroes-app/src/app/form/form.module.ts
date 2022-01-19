import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormComponent } from './main-form/main-form.component';
import { FormService } from './form.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainFormComponent
  ],exports: [
    MainFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    FormService
  ]
})
export class FormModule { }
