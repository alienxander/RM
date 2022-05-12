package cl.rmgsoft.api.dao;

import java.util.List;

import cl.rmgsoft.api.model.Alumno;
import cl.rmgsoft.api.response.ResponseObject;

public interface AlumnoDAO {
	public List<Alumno> getListaAlumnos();
	public List<Alumno> getListaAlumnos(int stdNumber);
	public int guardarAlumno(Alumno alumno);
	public int modificarAlumno(Alumno alumno);
	public int eliminarAlumno(int stdNumber);
}
