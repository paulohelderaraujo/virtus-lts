import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VersoesListComponent } from './versoes-list/versoes-list.component';
import { VersoesDetailComponent } from './versoes-detail/versoes-detail.component';

const versoesRoutes: Routes = [
  { path: 'versoes',  component: VersoesListComponent, data: { animation: 'versoes' } },
  { path: 'versao/:id', component: VersoesDetailComponent, data: { animation: 'versao' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(versoesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VersoesRoutingModule { }
