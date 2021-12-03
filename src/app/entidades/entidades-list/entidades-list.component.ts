// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntidadesService } from '../entidades.service';
import { Entidade } from '../entidade';

@Component({
  selector: 'app-entidades-list',
  templateUrl: './entidades-list.component.html',
  styleUrls: ['./entidades-list.component.css']
})
export class EntidadesListComponent implements OnInit {
  entidades$!: Observable<Entidade[]>;
  selectedId = 0;

  constructor(
    private service: EntidadesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.entidades$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getEntidades();
      })
    );
  }

}
