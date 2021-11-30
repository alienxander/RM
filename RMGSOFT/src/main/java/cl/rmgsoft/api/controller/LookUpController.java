package cl.rmgsoft.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.rmgsoft.api.request.LookUpRequest;
import cl.rmgsoft.api.response.ResponseObject;
import cl.rmgsoft.api.service.LookUpService;

@RestController
@RequestMapping("/lookup")
public class LookUpController {
	@Autowired
	LookUpService lookUpService;
	@PostMapping(path = "/obtenerLista", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseObject getLista(@RequestBody LookUpRequest request){		
		return lookUpService.getLista(request);
	}

	@GetMapping(path = "/obtenerConductores", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseObject getConductores(){		
		return lookUpService.getConductores();
	}

	
}
