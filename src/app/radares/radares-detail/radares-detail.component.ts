import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { RadaresService } from '../radares.service';
import { Radar } from '../radar';

@Component({
  selector: 'app-radares-detail',
  templateUrl: './radares-detail.component.html',
  styleUrls: ['./radares-detail.component.css']
})
export class RadaresDetailComponent implements OnInit {
  radar$!: Observable<Radar>
  radar:Radar={
    id:0,
    name: "",
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RadaresService
  ) {}

  ngOnInit() {
    this.radar$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRadar(params.get('id')!)
      )
    );
  }

  update(radar:Radar, name:string){
    console.log('Updating '+name)
    this.radar = radar
    this.service.updateRadar(this.radar).subscribe(()=>{this.refresh()})
  }

  delete(id:number){
    console.log('Deleting '+id)
    this.radar.id = id
    this.service.deleteRadar(id).subscribe(()=>{this.refresh()})
  }

  save(argName:string) {
    this.radar.id = 0
    this.radar.name = argName
    console.log('Saving '+argName)
    this.service.saveRadar(this.radar).subscribe(()=>{this.refresh()})
  }

  refresh() {
    this.router.navigate(['/radares']);
  }

}
