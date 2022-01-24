package cl.rmgsoft.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.rmgsoft.api.model.Conductor;
import cl.rmgsoft.api.response.ResponseObject;
import cl.rmgsoft.api.service.ConductorService;

@RestController
@RequestMapping("/conductor")
// @CrossOrigin(origins = "http://localhost:3000")
public class ConductorController {
	@Autowired
	private ConductorService conductorService;

	@GetMapping(path = "/obtenerConductores", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseObject getListaConductores() {

		return conductorService.getListaConductores();
	}

	@PutMapping("/put/ingresaConductor")
	public ResponseObject putConductor(@RequestBody Conductor conductor) {

		return conductorService.putConductor(conductor);
	}

	@DeleteMapping("/delete/{idConductor}")
	public ResponseObject deleteConductor(@PathVariable int idConductor) {

		return conductorService.deleteConductor(idConductor);
	}

	@PutMapping("/put/modificaConductor")
	public ResponseObject updateConductor(@RequestBody Conductor conductor) {

		return conductorService.updateConductor(conductor);
	}

}
