package cl.rmgsoft.api.dao;

import java.util.List;

import cl.rmgsoft.api.model.Conductor;

public interface ConductorDAO {
	public List<Conductor> getListaConductores();

	public int putConductor(Conductor conductor);

	public int deleteConductor(int idConductor);

	public int updateConductor(Conductor conductor);
}
