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

		String sql = "select alumno.id, alumno.\"stdNumber\", alumno.rut, alumno.nombre, alumno.apellido, alumno.direccion,\r\n" + 
				"comuna.descripcion as comuna,  alumno.telefono, curso.descripcion as curso,\r\n" + 
				"area.codigo as area, recorrido.codigo as recorrido\r\n" + 
				"from dbo.\"Alumno\" AS alumno, dbo.\"Comuna\" AS comuna, dbo.\"Curso\" as curso, \r\n" + 
				"dbo.\"Area\" as area, dbo.\"Recorrido\" as recorrido\r\n" + 
				"where alumno.id_comuna = comuna.id and alumno.id_curso = curso.id\r\n" + 
				"and curso.id_area = area.id and alumno.id_recorrido = recorrido.id;";
		return jdbcTemplate.query(sql, new AlumnoMapper());
	}

}
