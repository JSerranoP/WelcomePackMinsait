import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDetailComponent } from './detail/main-detail/main-detail.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainListComponent } from './list/main-list/main-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainHomeComponent },
  { path: 'list', component: MainListComponent },
  { path: 'list/:id', component: MainDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
