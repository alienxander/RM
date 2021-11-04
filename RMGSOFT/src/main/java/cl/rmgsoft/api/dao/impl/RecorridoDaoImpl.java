package cl.rmgsoft.api.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import cl.rmgsoft.api.dao.RecorridoDAO;
import cl.rmgsoft.api.dao.mapper.RecorridoMapper;
import cl.rmgsoft.api.model.Recorrido;

@Repository("recorridoDao")
public class RecorridoDaoImpl implements RecorridoDAO{
	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Override
	public List<Recorrido> getRecorridos() {
		// TODO Auto-generated method stub
		String sql = "SELECT id, codigo, \"horaInicio\", \"horaFin\"\r\n" + 
				"	FROM dbo.\"Recorrido\"";
		return jdbcTemplate.query(sql, new RecorridoMapper());
	}

}
