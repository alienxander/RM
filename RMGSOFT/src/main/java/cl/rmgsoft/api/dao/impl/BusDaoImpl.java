package cl.rmgsoft.api.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import cl.rmgsoft.api.dao.BusDAO;
import cl.rmgsoft.api.dao.mapper.BusMapper;
import cl.rmgsoft.api.model.Bus;

@Repository("busDAO")
public class BusDaoImpl implements BusDAO {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public List<Bus> getListaBuses() {

		String sql = "SELECT bus.id, bus.patente, conductor.rut, conductor.nombre, bus.descripcion, recorrido.codigo as recorrido\r\n"
				+ "FROM dbo.\"Bus\" AS bus, dbo.\"Conductor\" AS conductor, dbo.\"Recorrido\" AS recorrido \r\n"
				+ "WHERE bus.id_conductor = conductor.id and bus.id_recorrido = recorrido.id;";

		return jdbcTemplate.query(sql, new BusMapper());
	}

	@Override
	public int putBus(Bus bus) {

		String sql = "INSERT INTO \"RMG\".dbo.\"Bus\"(patente, id_conductor, descripcion, id_recorrido)\r\n"
				+ "VALUES(?,?,?,?);";
		try {

			return jdbcTemplate.update(sql, bus.getPatente(), bus.getIdConductor(), bus.getDescripcion(),
					bus.getIdRecorrido());
		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}

	}

	@Override
	public int deleteBus(int idBus) {

		String sql = "DELETE FROM \"RMG\".dbo.\"Bus\" WHERE id=?";

		try {

			return jdbcTemplate.update(sql, idBus);

		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}
	}

	@Override
	public int updateBus(Bus bus) {

		String sql = "UPDATE \"RMG\".dbo.\"Bus\"\r\n"
				+ "SET patente = ?, id_conductor = ?, descripcion = ?, id_recorrido = ? WHERE ID = ?;";

		try {

			return jdbcTemplate.update(sql, new Object[] { bus.getPatente(), bus.getIdConductor(), bus.getDescripcion(),
					bus.getIdRecorrido(), bus.getId() });

		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}
	}
}
