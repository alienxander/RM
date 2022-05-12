package cl.rmgsoft.api.model;

import java.io.Serializable;

import cl.rmgsoft.utils.RutUtil;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class Conductor implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 7252088807570819812L;
	private int id;
	private String rut;
	private String nombre;
	private String apellido;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRutSinFormato() {
		return RutUtil.getRutSinFormato(this.rut);
	}
	
	public String getRut() {
		if(this.getRutSinFormato().equals("0000")) {
			return "Sin Asignar";
		}else {
			return this.rut;
		}
		
	}

	public void setRut(String rut) {
		this.rut = RutUtil.formatRut(rut);
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

}
