import { Component, OnInit } from '@angular/core';
import {Alumno, IAlumno} from '../models/alumno.model';
import {AlumnoService} from '../services/alumno.service';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent implements OnInit {
  public _alumno: IAlumno;
  public alumno2 = new Alumno();
  isSaving: boolean;
  constructor(private alumnoService: AlumnoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ alumno }) => {
      this.alumno = alumno;
      console.log(this.alumno);
    });
  }

  save() {
    this.isSaving = true;
    if (this.alumno.id != null && this.alumno.id !== undefined) {
      this.subscribeToSaveResponse(this.alumnoService.actualizar(this.alumno));
    } else {
      this.subscribeToSaveResponse(this.alumnoService.guardar(this.alumno));
    }
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IAlumno>>) {
    result.subscribe((res: HttpResponse<IAlumno>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  private onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError() {
    this.isSaving = false;
    console.log('error guardando alumno');
  }

  get alumno() {
    return this._alumno;
  }

  set alumno(alumno: IAlumno) {
    this._alumno = alumno;
  }

  previousState() {
    window.history.back();
  }

}
