import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StatusListComponent } from './status-list/status-list.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';

import { StatusesRoutingModule } from './status-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StatusesRoutingModule
  ],
  declarations: [
    StatusListComponent,
    StatusDetailComponent
  ]
})
export class StatusesModule {}
