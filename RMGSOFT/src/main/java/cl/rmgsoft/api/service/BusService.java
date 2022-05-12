package cl.rmgsoft.api.service;

import cl.rmgsoft.api.model.Bus;
import cl.rmgsoft.api.response.ResponseObject;

public interface BusService {
	public ResponseObject getListaBuses();
	public ResponseObject getListaBuses(int idRecorrido);
	public ResponseObject putBus(Bus bus);
	public ResponseObject deleteBus(int idBus);
	public ResponseObject updateBus(Bus bus);
	public ResponseObject asignarBus(Bus bus);
	public ResponseObject asignarNuevoBus(Bus bus);
}
