package cl.rmgsoft.api.service;

import cl.rmgsoft.api.model.Bus;
import cl.rmgsoft.api.response.ResponseObject;

public interface BusService {
	public ResponseObject getListaBuses();
	public ResponseObject putBus(Bus bus);
	public ResponseObject deleteBus(int idBus);
	public ResponseObject updateBus(Bus bus);
}
