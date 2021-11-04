package cl.rmgsoft.api.response.model.message;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Component("message")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6559115729199247473L;
	private MessageType type;
	private String code;
	private String title;
	private String description;
}
