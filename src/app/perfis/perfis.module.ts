import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PerfisListComponent } from './perfis-list/perfis-list.component';
import { PerfisDetailComponent } from './perfis-detail/perfis-detail.component';

import { PerfisRoutingModule } from './perfis-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PerfisRoutingModule
  ],
  declarations: [
    PerfisListComponent,
    PerfisDetailComponent
  ]
})
export class PerfisModule {}
