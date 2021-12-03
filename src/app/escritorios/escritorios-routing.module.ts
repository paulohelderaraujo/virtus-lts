import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EscritoriosListComponent } from './escritorios-list/escritorios-list.component';
import { EscritoriosDetailComponent } from './escritorios-detail/escritorios-detail.component';

const escritoriosRoutes: Routes = [
  { path: 'escritorios',  component: EscritoriosListComponent, data: { animation: 'escritorios' } },
  { path: 'escritorio/:id', component: EscritoriosDetailComponent, data: { animation: 'escritorio' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(escritoriosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EscritoriosRoutingModule { }
