import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAlumnoComponent } from './reporte-alumno.component';

describe('ReporteAlumnoComponent', () => {
  let component: ReporteAlumnoComponent;
  let fixture: ComponentFixture<ReporteAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
