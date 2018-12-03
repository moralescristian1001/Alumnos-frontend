import {IPersona} from './persona.model';
import {IAlumno} from './alumno.model';
import {ICurso} from './curso.model';

export interface IInscripcionesCurso {
  id?: number;
  alumno?: IAlumno;
  curso?: ICurso;
  fechaInscripcion?: Date;
}

export class InscripcionesCurso implements IInscripcionesCurso {
  constructor(
    public id?: number,
  public alumno?: IAlumno,
  public curso?: ICurso,
  public fechaInscripcion?: Date
  ) {}
}
