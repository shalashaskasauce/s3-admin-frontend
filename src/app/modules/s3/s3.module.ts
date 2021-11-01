import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './components/admin/admin.component';
import { ListBucketsComponent } from './components/list-buckets/list-buckets.component';
import { MaterialModule } from '../material.module';
import { S3RoutingModule } from './s3-routing.module';
import { ListObjectsComponent } from './components/list-objects/list-objects.component';
import { ObjectFunctionsComponent } from './components/object-functions/object-functions.component';

@NgModule({
  declarations: [
    AdminComponent,
    ListBucketsComponent,
    ListObjectsComponent,
    ObjectFunctionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    S3RoutingModule
  ]
})
export class S3Module { }
