package cl.rmgsoft.api.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import cl.rmgsoft.api.dao.AlumnoDAO;
import cl.rmgsoft.api.dao.mapper.AlumnoMapper;
import cl.rmgsoft.api.model.Alumno;
@Repository("alumnoDAO")
public class AlumnoDaoImpl implements AlumnoDAO{
	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Override
	public List<Alumno> getListaAlumnos() {

//		String sql = "select alumno.id, alumno.\"stdNumber\", alumno.rut, alumno.nombre, alumno.apellido, alumno.direccion,\r\n" + 
//				"comuna.descripcion as comuna,  alumno.telefono, curso.descripcion as curso,\r\n" + 
//				"area.codigo as area, recorrido.codigo as recorrido\r\n" + 
//				"from dbo.\"Alumno\" AS alumno, dbo.\"Comuna\" AS comuna, dbo.\"Curso\" as curso, \r\n" + 
//				"dbo.\"Area\" as area, dbo.\"Recorrido\" as recorrido\r\n" + 
//				"where alumno.id_comuna = comuna.id and alumno.id_curso = curso.id\r\n" + 
//				"and curso.id_area = area.id and alumno.id_recorrido = recorrido.id;";
		
		String sql = "select alumno.id, alumno.\"stdNumber\", alumno.rut, alumno.nombre, alumno.apellido, alumno.direccion, \r\n" + 
				"				comuna.id as idComuna, comuna.descripcion as comuna,  alumno.telefono, alumno.email, curso.id as idCurso, curso.descripcion as curso, \r\n" + 
				"				area.id as idArea, area.codigo as area, (select id from dbo.\"Recorrido\" r where r.codigo = alumno.codigo_recorrido) as idRecorrido, alumno.codigo_recorrido as recorrido, bus.id as idBus, bus.patente as \"tipoTransporte\",\r\n" + 
				"				sector, \"inicioContrato\", \"finContrato\", \"arancelContrato\" from dbo.\"Alumno\" AS alumno, dbo.\"Comuna\" AS comuna, dbo.\"Curso\" as curso,\r\n" + 
				"				dbo.\"Area\" as area, dbo.\"Bus\" AS bus\r\n" + 
				"				where alumno.id_comuna = comuna.id and alumno.id_curso = curso.id \r\n" + 
				"				and curso.id_area = area.id and alumno.id_bus = bus.id;";
		return jdbcTemplate.query(sql, new AlumnoMapper());
	}
	
	@Override
	public List<Alumno> getListaAlumnos(int stdNumber) {
		// TODO Auto-generated method stub
		String sql = "select alumno.id, alumno.\"stdNumber\", alumno.rut, alumno.nombre, alumno.apellido, alumno.direccion, \r\n" + 
				"				comuna.id as idComuna, comuna.descripcion as comuna,  alumno.telefono, alumno.email, curso.id as idCurso, curso.descripcion as curso, \r\n" + 
				"				area.id as idArea, area.codigo as area, (select id from dbo.\"Recorrido\" r where r.codigo = alumno.codigo_recorrido) as idRecorrido, alumno.codigo_recorrido as recorrido, bus.id as idBus, bus.patente as \"tipoTransporte\",\r\n" + 
				"				sector, \"inicioContrato\", \"finContrato\", \"arancelContrato\" from dbo.\"Alumno\" AS alumno, dbo.\"Comuna\" AS comuna, dbo.\"Curso\" as curso,\r\n" + 
				"				dbo.\"Area\" as area, dbo.\"Bus\" AS bus\r\n" + 
				"				where alumno.id_comuna = comuna.id and alumno.id_curso = curso.id \r\n" + 
				"				and curso.id_area = area.id and alumno.id_bus = bus.id and alumno.\"stdNumber\" = " + stdNumber + ";";
		
		return jdbcTemplate.query(sql, new AlumnoMapper());
	}
	
	@Override
	public int guardarAlumno(Alumno alumno) {
		// TODO Auto-generated method stub
		String sql = "INSERT INTO dbo.\"Alumno\"(\r\n" + 
				"	\"stdNumber\", rut, nombre, apellido, id_comuna, id_curso, id_bus, direccion, telefono, email, codigo_recorrido, sector, \"inicioContrato\", \"finContrato\", \"arancelContrato\")\r\n" + 
				"	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, TO_DATE(?,'YYYY-MM-DD'), TO_DATE(?,'YYYY-MM-DD'), ?);";
		return jdbcTemplate.update(sql, 
				alumno.getStdNumber(), 
				alumno.getRut(), 
				alumno.getNombre(), 
				alumno.getApellido(), 
				Integer.parseInt(alumno.getComuna()), 
				Integer.parseInt(alumno.getCurso()), 
				Integer.parseInt(alumno.getTipoTransporte()), 
				alumno.getDireccion(), 
				alumno.getTelefono(), 
				alumno.getEmail(), 
				alumno.getRecorrido(),
				alumno.getSector(),
				alumno.getFechaInicioContrato(),
				alumno.getFechaFinContrato(),
				alumno.getArancelContrato());
	}

	@Override
	public int modificarAlumno(Alumno alumno) {
		// TODO Auto-generated method stub
		String sql = "UPDATE dbo.\"Alumno\"\r\n" + 
				"	SET rut=?, nombre=?, apellido=?, id_comuna=?, id_curso=?, id_bus=?, direccion=?, telefono=?, email=?, codigo_recorrido=?, sector=?, \"inicioContrato\"=TO_DATE(?,'YYYY-MM-DD'), \"finContrato\"=TO_DATE(?,'YYYY-MM-DD'), \"arancelContrato\"=?\r\n" + 
				"	WHERE \"stdNumber\" = " + alumno.getStdNumber() + ";";
		return jdbcTemplate.update(sql,  
				alumno.getRut(), 
				alumno.getNombre(), 
				alumno.getApellido(), 
				alumno.getIdComuna(), 
				alumno.getIdCurso(), 
				alumno.getIdBus(), 
				alumno.getDireccion(), 
				alumno.getTelefono(), 
				alumno.getEmail(), 
				alumno.getRecorrido(),
				alumno.getSector(),
				alumno.getFechaInicioContrato(),
				alumno.getFechaFinContrato(),
				alumno.getArancelContrato());
	}
	
	@Override
	public int eliminarAlumno(int stdNumber) {
		// TODO Auto-generated method stub
		String sql = "DELETE FROM dbo.\"Alumno\"\r\n" + 
				"	WHERE \"stdNumber\" = ?;";
		return jdbcTemplate.update(sql, stdNumber);
	}

	

}
