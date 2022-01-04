import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPipesModule } from './app-pipes.module';

import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';

import { ListService } from './list/list.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppPipesModule,
    HttpClientModule,
    HomeModule,
    ListModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
