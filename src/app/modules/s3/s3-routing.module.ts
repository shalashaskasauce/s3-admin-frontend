import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { ListObjectsComponent } from './components/list-objects/list-objects.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'objects/:bucket',
    component: ListObjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S3RoutingModule { }
