import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAboutComponent } from './about/main-about/main-about.component';
import { MainDetailComponent } from './detail/main-detail/main-detail.component';
import { MainFormComponent } from './form/main-form/main-form.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { MainListComponent } from './list/main-list/main-list.component';
import { MainMyCreatesComponent } from './my-creates/main-my-creates/main-my-creates.component';
import { UpdateMyCreatesComponent } from './my-creates/update-my-creates/update-my-creates.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainHomeComponent },
  { path: 'list', loadChildren: () => import ('./list/list.module').then (m => m.ListModule) },
  { path: 'about', loadChildren: () => import ('./about/about.module').then (m => m.AboutModule) },
  { path: 'form', loadChildren: () => import ('./form/form.module').then (m => m.FormModule) },
  { path: 'my-creates', loadChildren: () => import ('./my-creates/my-creates.module').then (m => m.MyCreatesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
