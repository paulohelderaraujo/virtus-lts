// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StatusService } from '../status.service';
import { Status } from '../status';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  statuses$!: Observable<Status[]>;
  selectedId = 0;

  constructor(
    private service: StatusService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.statuses$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getStatuses();
      })
    );
  }

}
