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

		String sql = "SELECT B.id, B.patente, B.descripcion, C.rut, CONCAT(C.nombre, ' ',C.apellido ) AS nombre,\r\n"
							+ "R.codigo AS recorrido, CONCAT(R.\"horaInicio\", ' - ',R.\"horaFin\" ) AS horario,\r\n"
							+ "BCR.id  AS \"idBusConductorRecorrido\" \r\n"
					+ "FROM dbo.bus_conductor_recorrido AS BCR, dbo.\"Bus\" AS B , dbo.\"Conductor\" AS C, \r\n"
							+ "dbo.\"Recorrido\" AS R \r\n" 
					+ "WHERE BCR.id_bus= B.id AND  BCR.id_conductor= C.id \r\n"
							+ "AND BCR.id_recorrido = R.id \r\n" 
					+ "UNION ALL \r\n"
					+ "SELECT B.*,'0000' AS rut , 'Sin  Asignar'  AS nombre, 'Sin Recorr' AS recorrido , \r\n"
							+ "'00:00 - 00:00' AS horario ,  '0' AS \"idBusConductorRecorrido\" \r\n" + "FROM dbo.\"Bus\" AS B \r\n"
					+ "WHERE (B.id NOT IN (SELECT  BCR.id_bus FROM dbo.bus_conductor_recorrido AS BCR ) )";

		return jdbcTemplate.query(sql, new BusMapper());
	}
	
	@Override
	public List<Bus> getListaBuses(int idRecorrido) {

		String sql = "SELECT B.id, B.patente, B.descripcion, C.rut, CONCAT(C.nombre, ' ',C.apellido ) AS nombre,\r\n" + 
				"							R.codigo AS recorrido, CONCAT(R.\"horaInicio\", ' - ',R.\"horaFin\" ) AS horario,\r\n" + 
				"							BCR.id  AS \"idBusConductorRecorrido\"\r\n" + 
				"					FROM dbo.bus_conductor_recorrido AS BCR, dbo.\"Bus\" AS B , dbo.\"Conductor\" AS C,\r\n" + 
				"							dbo.\"Recorrido\" AS R\r\n" + 
				"					WHERE BCR.id_bus= B.id AND  BCR.id_conductor= C.id\r\n" + 
				"							AND BCR.id_recorrido = R.id AND R.id = " + idRecorrido + "\r\n" + 
				"					UNION ALL\r\n" + 
				"					SELECT B.*,'0000' AS rut , 'Sin  Asignar'  AS nombre, 'Sin Recorr' AS recorrido ,\r\n" + 
				"							'00:00 - 00:00' AS horario ,  '0' AS \"idBusConductorRecorrido\" FROM dbo.\"Bus\" AS B\r\n" + 
				"					WHERE (B.id NOT IN (SELECT  BCR.id_bus FROM dbo.bus_conductor_recorrido AS BCR ) )";

		return jdbcTemplate.query(sql, new BusMapper());
	}

	@Override
	public int putBus(Bus bus) {

		String sql = "INSERT INTO \"RMG\".dbo.\"Bus\"(patente, descripcion)\r\n" + "VALUES(?,?);";
		try {

			return jdbcTemplate.update(sql, bus.getPatente(), bus.getDescripcion());
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

		String sql = "UPDATE \"RMG\".dbo.\"Bus\"\r\n" + "SET patente = ?, descripcion = ? WHERE ID = ?;";

		try {

			return jdbcTemplate.update(sql, bus.getPatente(), bus.getDescripcion(), bus.getIdBus() );

		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}
	}

	@Override
	public int asignarInsertBus(Bus bus) {

		String sql = "INSERT INTO \"RMG\".dbo.bus_conductor_recorrido (id_bus, id_conductor , id_recorrido)\r\n"
				+ "VALUES(?,?,?);";
		try {

			return jdbcTemplate.update(sql, bus.getIdBus(), bus.getIdConductor(), bus.getIdRecorrido());
		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}

	}

	@Override
	public int asignarDeleteBus(Bus bus) {

		String sql = "DELETE FROM \"RMG\".dbo.bus_conductor_recorrido WHERE \"id\"=?";

		try {

			return jdbcTemplate.update(sql, Integer.valueOf(bus.getIdBusConductorRecorrido()));

		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}
	}

	@Override
	public int asignarUpdateBus(Bus bus) {

		String sql = "UPDATE \"RMG\".dbo.bus_conductor_recorrido\r\n"
				+ "SET id_conductor = ?, id_bus = ?, id_recorrido = ? WHERE \"id\" = ?;";

		try {

			return jdbcTemplate.update(sql, bus.getIdConductor(), bus.getIdBus(), bus.getIdRecorrido(),
					Integer.valueOf(bus.getIdBusConductorRecorrido()) );

		} catch (Exception err) {
			// Quien llama el método espera retornar valor "1" para OK y valor "0" ERR
			return 0;
		}
	}

}// fin class
