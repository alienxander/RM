package cl.rmgsoft.api.response;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonProperty;

import cl.rmgsoft.api.response.model.message.Message;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
public class ResponseObject implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5633836406017818872L;
	@JsonProperty("Body")
	private Object body;
	@JsonProperty("Message")
	private Message message;
}
