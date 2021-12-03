import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkflowsListComponent } from './workflows-list/workflows-list.component';
import { WorkflowsDetailComponent } from './workflows-detail/workflows-detail.component';

const workflowsRoutes: Routes = [
  { path: 'workflows',  component: WorkflowsListComponent, data: { animation: 'workflows' } },
  { path: 'workflow/:id', component: WorkflowsDetailComponent, data: { animation: 'workflow' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(workflowsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkflowsRoutingModule { }
