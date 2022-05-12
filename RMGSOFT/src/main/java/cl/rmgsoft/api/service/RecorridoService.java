package cl.rmgsoft.api.service;

import java.util.List;

import cl.rmgsoft.api.model.Recorrido;
import cl.rmgsoft.api.response.ResponseObject;

public interface RecorridoService {
	public ResponseObject getRecorridos();
	public ResponseObject getRecorrido(String codigo);
	public ResponseObject putRecorrido(Recorrido recorrido);
}
