import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AcoesListComponent } from './acoes-list/acoes-list.component';
import { AcoesDetailComponent } from './acoes-detail/acoes-detail.component';

import { AcoesRoutingModule } from './acoes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AcoesRoutingModule
  ],
  declarations: [
    AcoesListComponent,
    AcoesDetailComponent
  ]
})
export class AcoesModule {}
