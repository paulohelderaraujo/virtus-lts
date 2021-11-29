import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AcoesListComponent } from './acoes/acoes-list/acoes-list.component';
import { AnotacoesComponent } from './anotacoes/anotacoes.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { EntidadesComponent } from './entidades/entidades.component';
import { EscritoriosComponent } from './escritorios/escritorios.component';
import { FuncionalidadesComponent } from './funcionalidades/funcionalidades.component';
import { PerfisComponent } from './perfis/perfis.component';
import { RadaresComponent } from './radares/radares.component';
import { StatusListComponent } from './status/status-list/status-list.component';
import { VersoesComponent } from './versoes/versoes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { WorkflowsComponent } from './workflows/workflows.component';
const routes: Routes = [
  { path: 'acoes-component', component: AcoesListComponent },
  { path: 'anotacoes-component', component: AnotacoesComponent },
  { path: 'chamados-component', component: ChamadosComponent },
  { path: 'entidades-component', component: EntidadesComponent },
  { path: 'escritorios-component', component: EscritoriosComponent },
  { path: 'funcionalidades-component', component: FuncionalidadesComponent },
  { path: 'perfis-component', component: PerfisComponent },
  { path: 'radares-component', component: RadaresComponent },
  { path: 'status-component', component: StatusListComponent },
  { path: 'versoes-component', component: VersoesComponent },
  { path: 'usuarios-component', component: UsuariosComponent },
  { path: 'workflows-component', component: WorkflowsComponent },
  { path: '',   redirectTo: '/status-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {}
}
