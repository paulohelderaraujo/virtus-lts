import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscritoriosComponent } from './escritorios.component';

describe('EscritoriosComponent', () => {
  let component: EscritoriosComponent;
  let fixture: ComponentFixture<EscritoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscritoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscritoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
