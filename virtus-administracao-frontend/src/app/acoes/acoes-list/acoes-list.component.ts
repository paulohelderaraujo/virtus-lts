// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AcoesService } from '../acoes.service';
import { Acao } from '../acao';

@Component({
  selector: 'app-acoes-list',
  templateUrl: './acoes-list.component.html',
  styleUrls: ['./acoes-list.component.css']
})
export class AcoesListComponent implements OnInit {
  acoes$!: Observable<Acao[]>;
  selectedId = 0;

  constructor(
    private service: AcoesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.acoes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getAcoes();
      })
    );
  }

}
