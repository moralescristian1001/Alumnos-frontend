
export interface IPersona {
  id?: number;
  tipoDocumento?: string;
  documento?: number;
  nombre?: string;
  apellido?: string;
  fechaNacimiento?: Date;
}

export class PersonaModel implements IPersona {
  constructor(
    public id?: number,
    public tipoDocumento?: string,
    public documento?: number,
    public nombre?: string,
    public apellido?: string,
    public fechaNacimiento?: Date
  ) {}
}
