import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './components/admin/admin.component';
import { ListBucketsComponent } from './components/list-buckets/list-buckets.component';
import { MaterialModule } from '../material.module';
import { S3RoutingModule } from './s3-routing.module';
import { ListObjectsComponent } from './components/list-objects/list-objects.component';

@NgModule({
  declarations: [
    AdminComponent,
    ListBucketsComponent,
    ListObjectsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    S3RoutingModule
  ]
})
export class S3Module { }
