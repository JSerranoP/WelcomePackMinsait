import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home/main-home.component';
import { DefinicionComponent } from './main-home/definicion/definicion.component';
import { RequisitosComponent } from './main-home/requisitos/requisitos.component';
import { FuncionamientoWebComponent } from './main-home/funcionamiento-web/funcionamiento-web.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    MainHomeComponent,
    DefinicionComponent,
    RequisitosComponent,
    FuncionamientoWebComponent
  ],exports: [
    MainHomeComponent,
    DefinicionComponent,
    RequisitosComponent,
    FuncionamientoWebComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
