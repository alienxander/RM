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

import cl.rmgsoft.api.model.Bus;
import cl.rmgsoft.api.response.ResponseObject;
import cl.rmgsoft.api.service.BusService;

@RestController
@RequestMapping("/bus")
// @CrossOrigin(origins = "http://localhost:3000")
public class BusController {
	@Autowired
	private BusService busService;

	@GetMapping(path = "/obtenerBuses", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseObject getListaBuses() {

		return busService.getListaBuses();
	}

	@PutMapping("/put/ingresaBus")
	public ResponseObject putBus(@RequestBody Bus bus) {

		return busService.putBus(bus);
	}

	@DeleteMapping("/delete/{idBus}")
	public ResponseObject deleteBus(@PathVariable int idBus) {

		return busService.deleteBus(idBus);
	}

	@PutMapping("/put/modificaBus")
	public ResponseObject updateBus(@RequestBody Bus bus) {

		return busService.updateBus(bus);
	}

}
