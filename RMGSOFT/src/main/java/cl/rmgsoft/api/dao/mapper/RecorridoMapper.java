package cl.rmgsoft.api.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import cl.rmgsoft.api.model.Recorrido;

public class RecorridoMapper implements RowMapper<Recorrido>{

	@Override
	public Recorrido mapRow(ResultSet rs, int numRow) throws SQLException {
		// TODO Auto-generated method stub
		Recorrido recorrido = new Recorrido();
		recorrido.setId(rs.getInt("id"));
		recorrido.setCodigo(rs.getString("codigo"));
		recorrido.setHoraInicio(rs.getString("horaInicio"));
		recorrido.setHoraFin(rs.getString("horaFin"));
		return recorrido;
	}

}
