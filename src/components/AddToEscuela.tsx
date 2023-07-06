import { Escuela } from "../clases/Escuela";
import { Curso } from "../clases/Escuela";
import { Alumno } from "../clases/Escuela";

const alumno1=new Alumno ('Gustavo','Garcia');
const alumno2=new Alumno ('Alex','Irigoyen');
const alumno3=new Alumno ('sergio','Lorenzo');
const alumno4=new Alumno ('Flor','Danitz');

const curso1= new Curso('2° DS');
const curso2= new Curso('3° DS');

const escuela1= new Escuela('IES', 9023);

curso1.addAlumno(alumno1);
curso1.addAlumno(alumno2);
curso2.addAlumno(alumno3);
curso2.addAlumno(alumno4);

escuela1.addCurso(curso1);
escuela1.addCurso(curso2);

export function MostrarPorConsola(){
    return(
        <div>
      <h2>Instituto</h2>
      <p>{escuela1.nombre}  {escuela1.numero}</p>
      <h2>Cursos</h2>
      {escuela1.cursos.map((curso,index)=> 
      <div key={index}>
        <h3>{curso.nombre}</h3>
        <ul>
            {curso.alumnos.map((alumno,index) => (
                <li key={index}>{alumno.nombre} {alumno.apellido}</li>
            ))}
           
            </ul>
            </div>)}
      </div>
    )
}