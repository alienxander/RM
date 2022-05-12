package cl.rmgsoft.api.dao;

import java.util.List;

import cl.rmgsoft.api.model.Bus;

public interface BusDAO {
	public List<Bus> getListaBuses();
	public List<Bus> getListaBuses(int idRecorrido);

	public int putBus(Bus bus);

	public int deleteBus(int idBus);

	public int updateBus(Bus bus);

	public int asignarInsertBus(Bus bus);

	public int asignarDeleteBus(Bus bus);

	public int asignarUpdateBus(Bus bus);
}
