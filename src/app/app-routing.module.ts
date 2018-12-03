import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {AlumnosComponent} from './alumnos/alumnos.component';
import {CrearAlumnosComponent} from './crear-editar-alumnos/crear-alumnos.component';

import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';
import {Alumno, IAlumno} from './models/alumno.model';
import {AlumnoService} from './services/alumno.service';
import {ReporteCursoComponent} from './reporte-curso/reporte-curso.component';
import {InscribirMateriaComponent} from './inscribir-materia/inscribir-materia.component';

@Injectable({ providedIn: 'root' })
export class AlumnoResolve implements Resolve<IAlumno> {
  constructor(private service: AlumnoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(map((res: HttpResponse<Alumno>) => res.body));
    }
    return of(new Alumno(null,
      {id: null, tipoDocumento: '', documento: null, nombre: '', apellido: '', fechaNacimiento: new Date()}, null));
  }
}

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'crear-alumnos',
    component: CrearAlumnosComponent,
    resolve: {
      alumno: AlumnoResolve
    }
  },
  { path: 'crear-alumnos/:id/editar',
    component: CrearAlumnosComponent,
    resolve: {
      alumno: AlumnoResolve
    }
  },
  { path: 'reporte-curso', component: ReporteCursoComponent},
  { path: 'inscribir-materia/:id', component: InscribirMateriaComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
