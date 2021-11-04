package cl.rmgsoft.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cl.rmgsoft.api.request.LookUpRequest;
import cl.rmgsoft.api.response.ResponseObject;
import cl.rmgsoft.api.service.RecorridoService;

@RestController
@RequestMapping("/recorrido")
public class RecorridoController {
	@Autowired
	private RecorridoService recorridoService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/obtenerRecorridos", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseObject getRecorridos(){		
		return recorridoService.getRecorridos();
	}
}
