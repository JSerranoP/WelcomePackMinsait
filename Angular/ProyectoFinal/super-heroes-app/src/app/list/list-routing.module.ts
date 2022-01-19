import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDetailComponent } from '../detail/main-detail/main-detail.component';
import { MainListComponent } from './main-list/main-list.component';

const routes: Routes = [
  { path: '', component: MainListComponent },
  { path: 'list/:id', component: MainDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
