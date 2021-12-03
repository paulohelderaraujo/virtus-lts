import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChamadosListComponent } from './chamados-list/chamados-list.component';
import { ChamadosDetailComponent } from './chamados-detail/chamados-detail.component';

import { ChamadosRoutingModule } from './chamados-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChamadosRoutingModule
  ],
  declarations: [
    ChamadosListComponent,
    ChamadosDetailComponent
  ]
})
export class ChamadosModule {}
