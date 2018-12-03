import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IAlumno} from '../models/alumno.model';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {ICurso} from '../models/curso.model';
import {IInscripcionesCurso} from '../models/inscripciones-curso.model';
type EntityResponseType = HttpResponse<ICurso>;
type EntityArrayResponseType2 = HttpResponse<IInscripcionesCurso[]>;
type EntityArrayResponseType = HttpResponse<ICurso[]>;

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private resourceUrl = 'http://localhost:8081/alumnos/api/cursos';
  constructor(private http: HttpClient) { }

  cargarTodos(): Observable<EntityArrayResponseType> {
    return this.http.get<ICurso[]>(this.resourceUrl, { observe: 'response' });
  }

  cargar(id: number): Observable<EntityArrayResponseType2> {
    return this.http.get<IInscripcionesCurso[]>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
  cargarCursosAlumno(id: number): Observable<EntityArrayResponseType> {
    return this.http.get<ICurso[]>(`${this.resourceUrl}/alumno/${id}`, { observe: 'response' });
  }

  guardarInscripcionMateria(idAlumno: number, idCurso: number) {
    let params = new HttpParams();
    params = params.append('idAlumno', idAlumno.toString());
    params = params.append('idCurso', idCurso.toString());
    return this.http.post<IInscripcionesCurso>(this.resourceUrl, null, { params: params, observe: 'response'});
  }
}
