import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { PerfisService } from '../perfis.service';
import { Perfil } from '../perfil';

@Component({
  selector: 'app-perfis-detail',
  templateUrl: './perfis-detail.component.html',
  styleUrls: ['./perfis-detail.component.css']
})
export class PerfisDetailComponent implements OnInit {
  perfil$!: Observable<Perfil>
  perfil:Perfil={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PerfisService
  ) {}

  ngOnInit() {
    this.perfil$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getPerfil(params.get('id')!)
      )
    );
  }

  update(perfil:Perfil, name:string){
    console.log('Updating '+name)
    this.perfil = perfil
    this.service.updatePerfil(this.perfil).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.perfil.id = id
    this.service.deletePerfil(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.perfil.id = 0
    this.perfil.name = argName
    console.log('Saving '+argName)
    this.service.savePerfil(this.perfil).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/perfis']);
  }

}
