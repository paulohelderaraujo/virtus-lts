// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnotacoesService } from '../anotacoes.service';
import { Anotacao } from '../anotacao';

@Component({
  selector: 'app-anotacoes-list',
  templateUrl: './anotacoes-list.component.html',
  styleUrls: ['./anotacoes-list.component.css']
})
export class AnotacoesListComponent implements OnInit {
  anotacoes$!: Observable<Anotacao[]>;
  selectedId = 0;

  constructor(
    private service: AnotacoesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.anotacoes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getAnotacoes();
      })
    );
  }

}
