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
		alumno.setIdComuna(rs.getInt("idcomuna"));
		alumno.setComuna(rs.getString("comuna"));
		alumno.setTelefono(rs.getString("telefono"));
		alumno.setIdCurso(rs.getInt("idcurso"));
		alumno.setCurso(rs.getString("curso"));
		alumno.setIdArea(rs.getInt("idarea"));
		alumno.setArea(rs.getString("area"));
		alumno.setIdRecorrido(rs.getInt("idrecorrido"));
		alumno.setRecorrido(rs.getString("recorrido"));
		alumno.setEmail(rs.getString("email"));
		alumno.setIdBus(rs.getInt("idbus"));
		alumno.setTipoTransporte(rs.getString("tipoTransporte"));
		alumno.setSector(rs.getInt("sector"));
		alumno.setFechaInicioContrato(rs.getDate("inicioContrato") != null?rs.getDate("inicioContrato").toString():"");
		alumno.setFechaFinContrato(rs.getDate("finContrato") != null?rs.getDate("finContrato").toString():"");
		alumno.setArancelContrato(rs.getInt("arancelContrato"));
		return alumno;
	}

}
