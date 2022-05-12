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
	
	@Override
	public List<Recorrido> getRecorrido(String codigo) {
		// TODO Auto-generated method stub
		String sql = "SELECT id, codigo, \"horaInicio\", \"horaFin\"\r\n" + 
				"	FROM dbo.\"Recorrido\" where codigo = '" + codigo + "'";
		return jdbcTemplate.query(sql, new RecorridoMapper());
	}
	
	
	
	@Override
	public int putRecorrido(Recorrido recorrido) {
		// TODO Auto-generated method stub
		String sql = "INSERT INTO dbo.\"Recorrido\"(\r\n" + 
				"	codigo, \"horaInicio\", \"horaFin\")\r\n" + 
				"	VALUES (?, ?, ?);";
		try {

			return jdbcTemplate.update(sql, recorrido.getCodigo(), recorrido.getHoraInicio(), recorrido.getHoraFin());
		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}
	}



	

}
