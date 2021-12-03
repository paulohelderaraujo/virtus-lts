import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChamadosListComponent } from './chamados-list/chamados-list.component';
import { ChamadosDetailComponent } from './chamados-detail/chamados-detail.component';

const chamadosRoutes: Routes = [
  { path: 'chamados',  component: ChamadosListComponent, data: { animation: 'chamados' } },
  { path: 'chamado/:id', component: ChamadosDetailComponent, data: { animation: 'chamado' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(chamadosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChamadosRoutingModule { }
