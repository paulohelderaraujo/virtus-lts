import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RadaresListComponent } from './radares-list/radares-list.component';
import { RadaresDetailComponent } from './radares-detail/radares-detail.component';

const radaresRoutes: Routes = [
  { path: 'radares',  component: RadaresListComponent, data: { animation: 'radares' } },
  { path: 'radar/:id', component: RadaresDetailComponent, data: { animation: 'radar' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(radaresRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RadaresRoutingModule { }
