import { Component, OnInit } from '@angular/core';
import {ICurso} from '../models/curso.model';
import {CursoService} from '../services/curso.service';
import {HttpResponse} from '@angular/common/http';
import {IAlumno} from '../models/alumno.model';
import {IInscripcionesCurso} from '../models/inscripciones-curso.model';

@Component({
  selector: 'app-reporte-curso',
  templateUrl: './reporte-curso.component.html',
  styleUrls: ['./reporte-curso.component.css']
})
export class ReporteCursoComponent implements OnInit {
  cursos: ICurso[];
  curso: ICurso;
  id: number;
  selectedValue: ICurso;
  inscripcionesCurso: IInscripcionesCurso[];
  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cargarTodos();
  }

  cargarTodos() {
    this.cursoService.cargarTodos().subscribe(
      (res: HttpResponse<ICurso[]>) =>
        this.cursos = res.body
    );
  }

  cargar() {
    this.cursoService.cargar(this.id).subscribe(
      (res: HttpResponse<IInscripcionesCurso[]>) =>
        this.inscripcionesCurso = res.body
    );
  }
  selectCurso(event: any) {
    this.id = event.target.value;
  }

}
