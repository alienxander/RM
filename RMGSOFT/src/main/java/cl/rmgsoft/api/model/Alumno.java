package cl.rmgsoft.api.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

import cl.rmgsoft.api.response.model.message.Message;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Alumno implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5281243669878884369L;
	private int id;
	private int stdNumber;
	private String rut;
	private String nombre;
	private String apellido;
	private int idComuna;
	private String comuna;
	private String direccion;
	private String telefono;
	private int idCurso;
	private String curso;
	private int idArea;
	private String area;
	private int idRecorrido;
	private String recorrido;
	private int idBus;
	private String tipoTransporte;
	private String email;
	private int sector;
	private String fechaInicioContrato;
	private String fechaFinContrato;
	private int arancelContrato;
}
