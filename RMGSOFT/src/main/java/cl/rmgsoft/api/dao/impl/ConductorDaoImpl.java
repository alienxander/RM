package cl.rmgsoft.api.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import cl.rmgsoft.api.dao.ConductorDAO;
import cl.rmgsoft.api.dao.mapper.ConductorMapper;
import cl.rmgsoft.api.model.Conductor;

@Repository("conductorDAO")
public class ConductorDaoImpl implements ConductorDAO {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<Conductor> getListaConductores() {

		String sql = "SELECT \"id\", rut, nombre, apellido\r\n" 
					+ "FROM dbo.\"Conductor\" \r\n" 
					+ "WHERE \"id\" != 1 ";

		return jdbcTemplate.query(sql, new ConductorMapper());
	}

	@Override
	public int putConductor(Conductor conductor) {

		String sql = "INSERT INTO \"RMG\".dbo.\"Conductor\"(rut, nombre, apellido)\r\n" + "VALUES(?,?,?);";
		try {

			return jdbcTemplate.update(sql, conductor.getRut(), conductor.getNombre(), conductor.getApellido());
		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}

	}

	@Override
	public int deleteConductor(int idConductor) {

		String sql = "DELETE FROM \"RMG\".dbo.\"Conductor\" WHERE id=?";

		try {

			return jdbcTemplate.update(sql, idConductor);

		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}
	}

	@Override
	public int updateConductor(Conductor conductor) {

		String sql = "UPDATE \"RMG\".dbo.\"Conductor\"\r\n" 
					+ "SET rut = ?, nombre = ?, apellido = ? WHERE ID = ?;";

		try {

			return jdbcTemplate.update(sql, new Object[] { conductor.getRut(), conductor.getNombre(),
					conductor.getApellido(), conductor.getId() });

		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}
	}
}
