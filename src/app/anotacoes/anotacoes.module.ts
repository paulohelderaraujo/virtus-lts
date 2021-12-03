import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnotacoesListComponent } from './anotacoes-list/anotacoes-list.component';
import { AnotacoesDetailComponent } from './anotacoes-detail/anotacoes-detail.component';

import { AnotacoesRoutingModule } from './anotacoes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AnotacoesRoutingModule
  ],
  declarations: [
    AnotacoesListComponent,
    AnotacoesDetailComponent
  ]
})
export class AnotacoesModule {}
