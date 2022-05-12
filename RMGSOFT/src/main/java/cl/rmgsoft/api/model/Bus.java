package cl.rmgsoft.api.model;

import java.io.Serializable;

import cl.rmgsoft.utils.RutUtil;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public class Bus implements Serializable {

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

	public int getIdBus() {
		return idBus;
	}

	public void setIdBus(int idBus) {
		this.idBus = idBus;
	}

	public String getPatente() {
		return patente;
	}

	public void setPatente(String patente) {
		this.patente = patente;
	}

	public int getIdConductor() {
		return idConductor;
	}

	public void setIdConductor(int idConductor) {
		this.idConductor = idConductor;
	}

	public String getRutConductor() {
		if(this.getRutSinFormato().equals("0000")) {
			return "Sin Asignar";
		}else {
			return this.rutConductor;
		}
	}
	
	public String getRutSinFormato() {
		return RutUtil.getRutSinFormato(this.rutConductor);
	}

	public void setRutConductor(String rutConductor) {
		this.rutConductor = RutUtil.formatRut(rutConductor);
	}

	public String getNomreConductor() {
		return nomreConductor;
	}

	public void setNomreConductor(String nomreConductor) {
		this.nomreConductor = nomreConductor;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getRecorrido() {
		return recorrido;
	}

	public void setRecorrido(String recorrido) {
		this.recorrido = recorrido;
	}

	public int getIdRecorrido() {
		return idRecorrido;
	}

	public void setIdRecorrido(int idRecorrido) {
		this.idRecorrido = idRecorrido;
	}

	public String getHorario() {
		return horario;
	}

	public void setHorario(String horario) {
		this.horario = horario;
	}

	public String getIdBusConductorRecorrido() {
		return idBusConductorRecorrido;
	}

	public void setIdBusConductorRecorrido(String idBusConductorRecorrido) {
		this.idBusConductorRecorrido = idBusConductorRecorrido;
	}

}