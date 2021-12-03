import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VersoesListComponent } from './versoes-list/versoes-list.component';
import { VersoesDetailComponent } from './versoes-detail/versoes-detail.component';

import { VersoesRoutingModule } from './versoes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VersoesRoutingModule
  ],
  declarations: [
    VersoesListComponent,
    VersoesDetailComponent
  ]
})
export class VersoesModule {}
