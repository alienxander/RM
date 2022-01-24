package cl.rmgsoft.api.response.model;

import java.io.Serializable;
import java.util.List;

import cl.rmgsoft.api.model.Conductor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ListaConductoresResponse implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<Conductor> listaConductores;
}
