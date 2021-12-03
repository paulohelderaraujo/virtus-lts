import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { EscritoriosService } from '../escritorios.service';
import { Escritorio } from '../escritorio';

@Component({
  selector: 'app-escritorios-detail',
  templateUrl: './escritorios-detail.component.html',
  styleUrls: ['./escritorios-detail.component.css']
})
export class EscritoriosDetailComponent implements OnInit {
  escritorio$!: Observable<Escritorio>
  escritorio:Escritorio={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EscritoriosService
  ) {}

  ngOnInit() {
    this.escritorio$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEscritorio(params.get('id')!)
      )
    );
  }

  update(escritorio:Escritorio, name:string){
    console.log('Updating '+name)
    this.escritorio = escritorio
    this.service.updateEscritorio(this.escritorio).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.escritorio.id = id
    this.service.deleteEscritorio(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.escritorio.id = 0
    this.escritorio.name = argName
    console.log('Saving '+argName)
    this.service.saveEscritorio(this.escritorio).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/Escritorios']);
  }

}
