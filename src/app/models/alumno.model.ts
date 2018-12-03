import {IPersona, PersonaModel} from './persona.model';
import {Injectable} from '@angular/core';

export interface IAlumno {
  id?: number;
  persona?: IPersona;
  legajo?: number;
}

export class Alumno implements IAlumno {
  constructor(public id?: number, public persona?: IPersona, public legajo?: number) {}
}
