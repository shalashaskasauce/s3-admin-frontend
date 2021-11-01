import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';
import { OverviewComponent } from './overview/overview.component';
import { FileListComponent } from './file-list/file-list.component';


@NgModule({
  declarations: [
    OverviewComponent,
    FileListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatListModule
  ]
})
export class AdminModule { }
