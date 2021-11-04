package cl.rmgsoft.api.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import cl.rmgsoft.api.model.Alumno;

public class AlumnoMapper implements RowMapper<Alumno>{

	@Override
	public Alumno mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		Alumno alumno = new Alumno();
		alumno.setId(rs.getInt("id"));
		alumno.setStdNumber(rs.getInt("stdNumber"));
		alumno.setRut(rs.getString("rut"));
		alumno.setNombre(rs.getString("nombre"));
		alumno.setApellido(rs.getString("apellido"));
		alumno.setDireccion(rs.getString("direccion"));
		alumno.setComuna(rs.getString("comuna"));
		alumno.setTelefono(rs.getString("telefono"));
		alumno.setCurso(rs.getString("curso"));
		alumno.setArea(rs.getString("area"));
		alumno.setRecorrido(rs.getString("recorrido"));
		return alumno;
	}

}
