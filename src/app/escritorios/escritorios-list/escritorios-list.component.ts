// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EscritoriosService } from '../escritorios.service';
import { Escritorio } from '../escritorio';

@Component({
  selector: 'app-escritorios-list',
  templateUrl: './escritorios-list.component.html',
  styleUrls: ['./escritorios-list.component.css']
})
export class EscritoriosListComponent implements OnInit {
  escritorios$!: Observable<Escritorio[]>;
  selectedId = 0;

  constructor(
    private service: EscritoriosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.escritorios$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getEscritorios();
      })
    );
  }

}
