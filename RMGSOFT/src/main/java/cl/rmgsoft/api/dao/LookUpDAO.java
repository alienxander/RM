package cl.rmgsoft.api.dao;

import java.util.List;

import cl.rmgsoft.api.model.Conductor;
import cl.rmgsoft.api.model.LookUp;
import cl.rmgsoft.api.request.LookUpRequest;

public interface LookUpDAO {
	public List<LookUp> getLista(LookUpRequest request);
	public List<Conductor> getConductores();
}
