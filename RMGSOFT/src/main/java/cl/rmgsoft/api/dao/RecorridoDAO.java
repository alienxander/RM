package cl.rmgsoft.api.dao;

import java.util.List;

import cl.rmgsoft.api.model.Recorrido;

public interface RecorridoDAO {
	public List<Recorrido> getRecorridos();
	public List<Recorrido> getRecorrido(String codigo);
	public int putRecorrido(Recorrido recorrido);
}
