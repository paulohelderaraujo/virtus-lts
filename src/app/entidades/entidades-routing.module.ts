import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntidadesListComponent } from './entidades-list/entidades-list.component';
import { EntidadesDetailComponent } from './entidades-detail/entidades-detail.component';

const entidadesRoutes: Routes = [
  { path: 'entidades',  component: EntidadesListComponent, data: { animation: 'entidades' } },
  { path: 'entidade/:id', component: EntidadesDetailComponent, data: { animation: 'entidade' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(entidadesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EntidadesRoutingModule { }
