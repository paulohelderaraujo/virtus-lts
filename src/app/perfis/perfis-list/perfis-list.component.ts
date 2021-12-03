// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PerfisService } from '../perfis.service';
import { Perfil } from '../perfil';

@Component({
  selector: 'app-perfis-list',
  templateUrl: './perfis-list.component.html',
  styleUrls: ['./perfis-list.component.css']
})
export class PerfisListComponent implements OnInit {
  perfis$!: Observable<Perfil[]>;
  selectedId = 0;

  constructor(
    private service: PerfisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.perfis$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getPerfis();
      })
    );
  }

}
