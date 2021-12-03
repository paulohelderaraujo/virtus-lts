// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RadaresService } from '../radares.service';
import { Radar } from '../radar';

@Component({
  selector: 'app-radares-list',
  templateUrl: './radares-list.component.html',
  styleUrls: ['./radares-list.component.css']
})
export class RadaresListComponent implements OnInit {
  radares$!: Observable<Radar[]>;
  selectedId = 0;

  constructor(
    private service: RadaresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.radares$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getRadares();
      })
    );
  }

}
