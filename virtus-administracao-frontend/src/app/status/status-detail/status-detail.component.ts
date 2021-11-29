import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { StatusService } from '../status.service';
import { Status } from '../status';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.css']
})
export class StatusDetailComponent implements OnInit {
  status$!: Observable<Status>
  status:Status={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StatusService
  ) {}

  ngOnInit() {
    this.status$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.service.getStatus(params.get('id')!)
      )
    );
  }

  update(status:Status, name:string){
    console.log('Updating '+name)
    this.status = status    
    this.service.updateStatus(this.status).subscribe(()=>{this.refresh()})    
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.status.id = id
    this.service.deleteStatus(id).subscribe(()=>{this.refresh()})    
  }

  save(argName:string) {
    this.status.id = 0
    this.status.name = argName
    console.log('Saving '+argName)    
    this.service.saveStatus(this.status).subscribe(()=>{this.refresh()})    
  }

  refresh() {
    this.router.navigate(['/statuses']);
  }

}
