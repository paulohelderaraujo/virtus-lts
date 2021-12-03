// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VersoesService } from '../versoes.service';
import { Versao } from '../versao';

@Component({
  selector: 'app-versoes-list',
  templateUrl: './versoes-list.component.html',
  styleUrls: ['./versoes-list.component.css']
})
export class VersoesListComponent implements OnInit {
  versoes$!: Observable<Versao[]>;
  selectedId = 0;

  constructor(
    private service: VersoesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.versoes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getVersoes();
      })
    );
  }

}
