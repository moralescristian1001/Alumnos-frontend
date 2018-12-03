import {IPersona} from './persona.model';

export interface ICarrera {
  id?: number;
  nombre?: string;
  descripcion?: string;
  fechaDesde?: Date;
  fechaHasta?: Date;
}

  export class Carrera implements ICarrera {
  constructor(
    public id?: number,
    public nombre?: string,
    public descripcion?: string,
    public fechaDesde?: Date,
    public fechaHasta?: Date
  ) {}
}
