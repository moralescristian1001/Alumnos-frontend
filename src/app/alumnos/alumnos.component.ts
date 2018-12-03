import { Component, OnInit } from '@angular/core';
import {AlumnoService} from '../services/alumno.service';
import {Alumno, IAlumno} from '../models/alumno.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: IAlumno[];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.cargarTodos();
  }

  cargarTodos() {
    this.alumnoService.cargarTodos().subscribe(
      (res: HttpResponse<IAlumno[]>) =>
        this.alumnos = res.body
    );
  }

}
