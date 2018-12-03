import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ICurso} from '../models/curso.model';
import {IInscripcionesCurso} from '../models/inscripciones-curso.model';
import {CursoService} from '../services/curso.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IAlumno} from '../models/alumno.model';

@Component({
  selector: 'app-inscribir-materia',
  templateUrl: './inscribir-materia.component.html',
  styleUrls: ['./inscribir-materia.component.css']
})
export class InscribirMateriaComponent implements OnInit {

  cursos: ICurso[];
  cursosAlumno: ICurso[];
  id: number;
  idAlumno: number;
  cursosDisponibles: ICurso[] = [];
  constructor(private cursoService: CursoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.idAlumno = params['id']);
    this.cargarTodos();
  }

  cargarTodos() {
    this.cursoService.cargarTodos().subscribe(
      (res: HttpResponse<ICurso[]>) =>
        this.onSaveSuccess2(res)
    );
  }
  cargarCursosAlumno() {
    this.cursoService.cargarCursosAlumno(this.idAlumno).subscribe(
      (res: HttpResponse<ICurso[]>) =>
        this.onSaveSuccess(res)
    );
  }
  private onSaveSuccess(res: HttpResponse<ICurso[]>) {
    this.cursosAlumno = res.body;
    this.cursosDisponiblesAlumno();
  }
  private onSaveSuccess2(res: HttpResponse<ICurso[]>) {
    this.cursos = res.body;
    this.cargarCursosAlumno();
  }
  selectCurso(event: any) {
    this.id = event.target.value;
  }
  previousState() {
    window.history.back();
  }
  cursosDisponiblesAlumno(): void {
    for (let i = 0; i < this.cursosAlumno.length; i++) {
      this.deleteCursos(this.cursosAlumno[i].id);
    }
  }
  deleteCursos(curso: number) {
    for (let j = 0; j < this.cursos.length; j++) {
      if (this.cursos[j].id === curso) {
        this.cursos.splice(j, 1);
        break;
      }
    }
  }

  save() {
    this.subscribeToSaveResponse(this.cursoService.guardarInscripcionMateria(this.idAlumno, this.id));
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IAlumno>>) {
    result.subscribe((res: HttpResponse<IAlumno>) => this.onSaveSuccess3(), (res: HttpErrorResponse) => this.onSaveError());
  }

  private onSaveSuccess3() {
    this.previousState();
  }

  private onSaveError() {
    console.log('error guardando inscripcion materia');
  }

}
