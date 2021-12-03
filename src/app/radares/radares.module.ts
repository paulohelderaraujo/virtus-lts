import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RadaresListComponent } from './radares-list/radares-list.component';
import { RadaresDetailComponent } from './radares-detail/radares-detail.component';

import { RadaresRoutingModule } from './radares-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RadaresRoutingModule
  ],
  declarations: [
    RadaresListComponent,
    RadaresDetailComponent
  ]
})
export class RadaresModule {}
