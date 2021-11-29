import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadaresComponent } from './radares.component';

describe('RadaresComponent', () => {
  let component: RadaresComponent;
  let fixture: ComponentFixture<RadaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
