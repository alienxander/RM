package cl.rmgsoft.api.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import cl.rmgsoft.api.model.Conductor;

public class ConductorLookUpMapper implements RowMapper<Conductor> {

	@Override
	public Conductor mapRow(ResultSet rs, int numRow) throws SQLException {

		Conductor conductor = new Conductor();
		conductor.setId(rs.getInt("id"));
		conductor.setRut(rs.getString("rut"));
		conductor.setNombre(rs.getString("nombre"));
		conductor.setApellido(rs.getString("apellido"));
		return conductor;
	}

}
