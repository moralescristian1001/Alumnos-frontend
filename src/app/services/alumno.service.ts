import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IAlumno} from '../models/alumno.model';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
type EntityResponseType = HttpResponse<IAlumno>;
type EntityArrayResponseType = HttpResponse<IAlumno[]>;

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private resourceUrl = 'http://localhost:8081/alumnos/api/alumnos';
  constructor(private http: HttpClient) { }

  cargarTodos(): Observable<EntityArrayResponseType> {
    return this.http.get<IAlumno[]>(this.resourceUrl, { observe: 'response' });
  }

  guardar(alumno: IAlumno): Observable<EntityResponseType> {
    return this.http.post<IAlumno>(this.resourceUrl, alumno, { observe: 'response'});
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IAlumno>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }

  actualizar(alumno: IAlumno): Observable<EntityResponseType> {
    return this.http.put<IAlumno>(this.resourceUrl, alumno, { observe: 'response' });
  }
}
