// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WorkflowsService } from '../workflows.service';
import { Workflow } from '../workflow';

@Component({
  selector: 'app-workflows-list',
  templateUrl: './workflows-list.component.html',
  styleUrls: ['./workflows-list.component.css']
})
export class WorkflowsListComponent implements OnInit {
  workflows$!: Observable<Workflow[]>;
  selectedId = 0;

  constructor(
    private service: WorkflowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.workflows$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getWorkflows();
      })
    );
  }

}
