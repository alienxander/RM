package cl.rmgsoft.api.dao.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import cl.rmgsoft.api.model.LookUp;

public class LookUpMapper implements RowMapper<LookUp>{

	@Override
	public LookUp mapRow(ResultSet rs, int numRow) throws SQLException {
		// TODO Auto-generated method stub
		LookUp lookUp = new LookUp();
		lookUp.setCodigo(rs.getInt("id"));
		lookUp.setDescripcion(rs.getString("descripcion"));
		return lookUp;
	}

}
