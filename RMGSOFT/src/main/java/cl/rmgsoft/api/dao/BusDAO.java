package cl.rmgsoft.api.dao;

import java.util.List;

import cl.rmgsoft.api.model.Bus;

public interface BusDAO {
	public List<Bus> getListaBuses();

	public int putBus(Bus bus);

	public int deleteBus(int idBus);

	public int updateBus(Bus bus);
}
