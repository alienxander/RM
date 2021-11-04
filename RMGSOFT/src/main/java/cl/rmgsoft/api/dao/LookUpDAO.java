package cl.rmgsoft.api.dao;

import java.util.List;
import java.util.Map;

import cl.rmgsoft.api.model.LookUp;
import cl.rmgsoft.api.request.LookUpRequest;

public interface LookUpDAO {
	public List<LookUp> getLista(LookUpRequest request);
}
