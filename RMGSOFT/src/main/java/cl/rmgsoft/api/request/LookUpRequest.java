package cl.rmgsoft.api.request;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LookUpRequest implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7049009078981857281L;
	private String tabla;
	private String campoFilter;
	private int idFilter = 0; 
}
