package cl.rmgsoft.api.service;

import cl.rmgsoft.api.model.Alumno;
import cl.rmgsoft.api.response.ResponseObject;

public interface AlumnoService {
	public ResponseObject getListaAlumnos();
	public ResponseObject getListaAlumnos(int stdNumber);
	public ResponseObject guardarAlumno(Alumno alumno);
	public ResponseObject modificarAlumno(Alumno alumno);
	public ResponseObject eliminarAlumno(int stdNumber);
}
