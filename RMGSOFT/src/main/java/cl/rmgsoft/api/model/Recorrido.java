package cl.rmgsoft.api.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recorrido implements Serializable{
	private int id;
	private String codigo;
	private String horaInicio;
	private String horaFin;
}
