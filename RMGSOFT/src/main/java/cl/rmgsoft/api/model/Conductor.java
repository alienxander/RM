package cl.rmgsoft.api.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Conductor implements Serializable {
	private int id;
	private String rut;
	private String nombre;
	private String apellido;
}
