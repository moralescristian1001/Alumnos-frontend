import {IPersona} from './persona.model';
import {ICarrera} from './carrera.model';

export interface ICurso {
  id?: number;
  idCarrera?: ICarrera;
  nombre?: string;
  descripcion?: string;
  cupoMaximo?: number;
  anio?: number;
}

export class Curso implements ICurso {
  constructor(
    public id?: number,
    public idCarrera?: ICarrera,
    public nombre?: string,
    public descripcion?: string,
    public cupoMaximo?: number,
    public anio?: number
  ) {}
}
