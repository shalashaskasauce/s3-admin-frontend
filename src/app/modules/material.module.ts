import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],

  exports: [
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
