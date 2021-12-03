import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { WorkflowsService } from '../workflows.service';
import { Workflow } from '../workflow';

@Component({
  selector: 'app-workflows-detail',
  templateUrl: './workflows-detail.component.html',
  styleUrls: ['./workflows-detail.component.css']
})
export class WorkflowsDetailComponent implements OnInit {
  workflow$!: Observable<Workflow>
  workflow:Workflow={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: WorkflowsService
  ) {}

  ngOnInit() {
    this.workflow$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getWorkflow(params.get('id')!)
      )
    );
  }

  update(workflow:Workflow, name:string){
    console.log('Updating '+name)
    this.workflow = workflow
    this.service.updateWorkflow(this.workflow).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.workflow.id = id
    this.service.deleteWorkflow(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.workflow.id = 0
    this.workflow.name = argName
    console.log('Saving '+argName)
    this.service.saveWorkflow(this.workflow).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/workflows']);
  }

}
