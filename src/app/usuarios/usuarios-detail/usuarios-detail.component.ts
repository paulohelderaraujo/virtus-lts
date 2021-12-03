import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios-detail',
  templateUrl: './usuarios-detail.component.html',
  styleUrls: ['./usuarios-detail.component.css']
})
export class UsuariosDetailComponent implements OnInit {
  usuario$!: Observable<Usuario>
  usuario:Usuario={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UsuariosService
  ) {}

  ngOnInit() {
    this.usuario$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getUsuario(params.get('id')!)
      )
    );
  }

  update(usuario:Usuario, name:string){
    console.log('Updating '+name)
    this.usuario = usuario
    this.service.updateUsuario(this.usuario).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.usuario.id = id
    this.service.deleteUsuario(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.usuario.id = 0
    this.usuario.name = argName
    console.log('Saving '+argName)
    this.service.saveUsuario(this.usuario).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/usuarios']);
  }

}
