// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FuncionalidadesService } from '../funcionalidades.service';
import { Funcionalidade } from '../funcionalidade';

@Component({
  selector: 'app-funcionalidades-list',
  templateUrl: './funcionalidades-list.component.html',
  styleUrls: ['./funcionalidades-list.component.css']
})
export class FuncionalidadesListComponent implements OnInit {
  funcionalidades$!: Observable<Funcionalidade[]>;
  selectedId = 0;

  constructor(
    private service: FuncionalidadesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.funcionalidades$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getFuncionalidades();
      })
    );
  }

}
