import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 's3',
    loadChildren: () => import('./modules/s3/s3.module').then(m => m.S3Module)
  },
  {
    path: 'local',
    loadChildren: () => import('./modules/local/local.module').then(m => m.LocalModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
