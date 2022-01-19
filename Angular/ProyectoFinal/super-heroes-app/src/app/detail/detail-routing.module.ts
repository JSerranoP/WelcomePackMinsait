import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDetailComponent } from './main-detail/main-detail.component';

const routes: Routes = [
  { path: '', component: MainDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
