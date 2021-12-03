import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatusListComponent } from './status-list/status-list.component';
import { StatusDetailComponent } from './status-detail/status-detail.component';

const statusesRoutes: Routes = [
  { path: 'statuses',  component: StatusListComponent, data: { animation: 'statuses' } },
  { path: 'status/:id', component: StatusDetailComponent, data: { animation: 'status' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(statusesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StatusesRoutingModule { }