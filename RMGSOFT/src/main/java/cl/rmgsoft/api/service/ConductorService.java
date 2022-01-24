package cl.rmgsoft.api.service;

import cl.rmgsoft.api.model.Conductor;
import cl.rmgsoft.api.response.ResponseObject;

public interface ConductorService {
	public ResponseObject getListaConductores();
	public ResponseObject putConductor(Conductor conductor);
	public ResponseObject deleteConductor(int idConductor);
	public ResponseObject updateConductor(Conductor conductor);
}
