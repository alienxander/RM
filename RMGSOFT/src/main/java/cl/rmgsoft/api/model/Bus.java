package cl.rmgsoft.api.model;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bus implements Serializable{

	private static final long serialVersionUID = 8966543669878853122L;
	private int idBus;
	private String patente;
	private int idConductor;
	private String rutConductor;
	private String nomreConductor;
	private String descripcion;
	private String recorrido;
	private int idRecorrido;
	private String horario;
	private String idBusConductorRecorrido;
}