import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAboutComponent } from './about/main-about/main-about.component';
import { MainDetailComponent } from './detail/main-detail/main-detail.component';
import { MainFormComponent } from './form/main-form/main-form.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainListComponent } from './list/main-list/main-list.component';
import { MainMyCreatesComponent } from './my-creates/main-my-creates/main-my-creates.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainHomeComponent },
  { path: 'list', component: MainListComponent },
  { path: 'about', component: MainAboutComponent },
  { path: 'form', component: MainFormComponent },
  { path: 'my-creates', component: MainMyCreatesComponent },
  { path: 'list/:id', component: MainDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
