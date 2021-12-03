import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfisListComponent } from './perfis-list/perfis-list.component';
import { PerfisDetailComponent } from './perfis-detail/perfis-detail.component';

const perfisRoutes: Routes = [
  { path: 'perfis',  component: PerfisListComponent, data: { animation: 'perfis' } },
  { path: 'perfil/:id', component: PerfisDetailComponent, data: { animation: 'perfil' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(perfisRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PerfisRoutingModule { }
