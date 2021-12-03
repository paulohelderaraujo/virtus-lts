import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { VersoesService } from '../versoes.service';
import { Versao } from '../versao';

@Component({
  selector: 'app-versoes-detail',
  templateUrl: './versoes-detail.component.html',
  styleUrls: ['./versoes-detail.component.css']
})
export class VersoesDetailComponent implements OnInit {
  versao$!: Observable<Versao>
  versao:Versao={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: VersoesService
  ) {}

  ngOnInit() {
    this.versao$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getVersao(params.get('id')!)
      )
    );
  }

  update(versao:Versao, name:string){
    console.log('Updating '+name)
    this.versao = versao
    this.service.updateVersao(this.versao).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.versao.id = id
    this.service.deleteVersao(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.versao.id = 0
    this.versao.name = argName
    console.log('Saving '+argName)
    this.service.saveVersao(this.versao).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/versoes']);
  }

}
