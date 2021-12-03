import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcoesListComponent } from './acoes-list/acoes-list.component';
import { AcoesDetailComponent } from './acoes-detail/acoes-detail.component';

const acoesRoutes: Routes = [
  { path: 'acoes',  component: AcoesListComponent, data: { animation: 'acoes' } },
  { path: 'acao/:id', component: AcoesDetailComponent, data: { animation: 'acao' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(acoesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AcoesRoutingModule { }
