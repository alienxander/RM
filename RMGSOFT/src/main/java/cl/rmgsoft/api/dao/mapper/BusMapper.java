package cl.rmgsoft.api.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import cl.rmgsoft.api.model.Bus;

public class BusMapper implements RowMapper<Bus> {

	@Override
	public Bus mapRow(ResultSet rs, int rowNum) throws SQLException {
		Bus bus = new Bus();
		bus.setIdBus(rs.getInt("id"));
		bus.setPatente(rs.getString("patente"));
		bus.setRutConductor(rs.getString("rut"));
		bus.setNomreConductor(rs.getString("nombre"));
		bus.setDescripcion(rs.getString("descripcion"));
		bus.setRecorrido(rs.getString("recorrido"));
		bus.setHorario(rs.getString("horario"));
		bus.setIdBusConductorRecorrido(rs.getString("idBusConductorRecorrido"));
		return bus;
	}

}
