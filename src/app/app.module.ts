import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CrearAlumnosComponent } from './crear-editar-alumnos/crear-alumnos.component';
import { FormsModule} from '@angular/forms';
import { ReporteCursoComponent } from './reporte-curso/reporte-curso.component';
import { InscribirMateriaComponent } from './inscribir-materia/inscribir-materia.component';
import { ReporteAlumnoComponent } from './reporte-alumno/reporte-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    CrearAlumnosComponent,
    ReporteCursoComponent,
    InscribirMateriaComponent,
    ReporteAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
