export class Alumno {
    nombre:string;
    apellido: string;

    constructor(nombre:string, apellido:string){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}


export class Curso {
  nombre: string;
  alumnos: Alumno[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.alumnos=[]
  }

  addAlumno(alumno:Alumno){
    this.alumnos.push(alumno);
  }
}

export class Escuela {
  nombre: string;
  numero: number;
  cursos: Curso[];

  constructor(nombre: string, numero: number) {
    this.nombre = nombre;
    this.numero = numero;
    this.cursos = [];
  }

  addCurso(curso:Curso){
    this.cursos.push(curso);
  }
}

