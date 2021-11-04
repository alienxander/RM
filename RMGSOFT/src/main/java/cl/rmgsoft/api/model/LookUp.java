package cl.rmgsoft.api.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LookUp implements Serializable{/**
	 * 
	 */
	private static final long serialVersionUID = 9021296126099249882L;
	private int codigo;
	private String descripcion;
}
