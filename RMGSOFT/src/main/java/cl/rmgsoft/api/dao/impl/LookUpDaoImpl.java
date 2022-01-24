package cl.rmgsoft.api.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import cl.rmgsoft.api.dao.LookUpDAO;
import cl.rmgsoft.api.dao.mapper.ConductorLookUpMapper;
import cl.rmgsoft.api.dao.mapper.LookUpMapper;
import cl.rmgsoft.api.model.Conductor;
import cl.rmgsoft.api.model.LookUp;
import cl.rmgsoft.api.request.LookUpRequest;

@Repository("lookUpDao")
public class LookUpDaoImpl implements LookUpDAO{
	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Override
	public List<LookUp> getLista(LookUpRequest request) {
		String sql = "SELECT id, descripcion\r\n" + 
				"FROM dbo.\"" + request.getTabla() + "\"";
		return jdbcTemplate.query(sql, new LookUpMapper());
	}
	@Override
	public List<Conductor> getConductores() {

		String sql = "SELECT id, rut, nombre, apellido\r\n" + 
				"FROM dbo.\"Conductor\"";
		return jdbcTemplate.query(sql, new ConductorLookUpMapper());
	}
	
}
