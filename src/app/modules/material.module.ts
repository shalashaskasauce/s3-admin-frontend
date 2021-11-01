import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],

  exports: [
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
