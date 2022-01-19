import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMyCreatesComponent } from './main-my-creates/main-my-creates.component';
import { UpdateMyCreatesComponent } from './update-my-creates/update-my-creates.component';

const routes: Routes = [
  { path: '', component: MainMyCreatesComponent },
  { path: 'my-creates/:id', component: UpdateMyCreatesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCreatesRoutingModule { }
