import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AcoesListComponent } from './acoes/acoes-list/acoes-list.component';
import { AnotacoesListComponent } from './anotacoes/anotacoes-list/anotacoes-list.component';
import { ChamadosListComponent } from './chamados/chamados-list/chamados-list.component';
import { EntidadesListComponent } from './entidades/entidades-list/entidades-list.component';
import { EscritoriosListComponent } from './escritorios/escritorios-list/escritorios-list.component';
import { FuncionalidadesListComponent } from './funcionalidades/funcionalidades-list/funcionalidades-list.component';
import { PerfisListComponent } from './perfis/perfis-list/perfis-list.component';
import { RadaresListComponent } from './radares/radares-list/radares-list.component';
import { StatusListComponent } from './status/status-list/status-list.component';
import { VersoesListComponent } from './versoes/versoes-list/versoes-list.component';
import { UsuariosListComponent } from './usuarios/usuarios-list/usuarios-list.component';
import { WorkflowsListComponent } from './workflows/workflows-list/workflows-list.component';
const routes: Routes = [
  { path: 'acoes-component', component: AcoesListComponent },
  { path: 'anotacoes-component', component: AnotacoesListComponent },
  { path: 'chamados-component', component: ChamadosListComponent },
  { path: 'entidades-component', component: EntidadesListComponent },
  { path: 'escritorios-component', component: EscritoriosListComponent },
  { path: 'funcionalidades-component', component: FuncionalidadesListComponent },
  { path: 'perfis-component', component: PerfisListComponent },
  { path: 'radares-component', component: RadaresListComponent },
  { path: 'status-component', component: StatusListComponent },
  { path: 'versoes-component', component: VersoesListComponent },
  { path: 'usuarios-component', component: UsuariosListComponent },
  { path: 'workflows-component', component: WorkflowsListComponent },
  { path: '',   redirectTo: '/status-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {}
}
