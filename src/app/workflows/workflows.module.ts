import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorkflowsListComponent } from './workflows-list/workflows-list.component';
import { WorkflowsDetailComponent } from './workflows-detail/workflows-detail.component';

import { WorkflowsRoutingModule } from './workflows-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WorkflowsRoutingModule
  ],
  declarations: [
    WorkflowsListComponent,
    WorkflowsDetailComponent
  ]
})
export class WorkflowsModule {}
