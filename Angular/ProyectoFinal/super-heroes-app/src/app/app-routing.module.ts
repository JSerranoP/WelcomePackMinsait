import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import ('./home/home.module').then (m => m.HomeModule) },
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
