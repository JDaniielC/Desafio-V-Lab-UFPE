import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
