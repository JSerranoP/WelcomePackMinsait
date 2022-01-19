import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPipesModule } from './app-pipes.module';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { DetailModule } from './detail/detail.module';
import { FooterComponent } from './shared/footer/footer.component';
import { FormModule } from './form/form.module';
import { AboutModule } from './about/about.module';
import { MyCreatesModule } from './my-creates/my-creates.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppPipesModule,
    HttpClientModule,
    HomeModule,
    ListModule,
    DetailModule,
    AboutModule,
    FormModule,
    MyCreatesModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
