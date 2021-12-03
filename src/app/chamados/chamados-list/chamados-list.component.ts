// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChamadosService } from '../chamados.service';
import { Chamado } from '../chamado';

@Component({
  selector: 'app-chamados-list',
  templateUrl: './chamados-list.component.html',
  styleUrls: ['./chamados-list.component.css']
})
export class ChamadosListComponent implements OnInit {
  chamados$!: Observable<Chamado[]>;
  selectedId = 0;

  constructor(
    private service: ChamadosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.chamados$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getChamados();
      })
    );
  }

}
