package cl.rmgsoft.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.OkHttp3ClientHttpRequestFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonProperty;

import cl.rmgsoft.api.model.Alumno;
import cl.rmgsoft.api.response.ResponseObject;
import cl.rmgsoft.api.response.model.ListaAlumnosResponse;
import cl.rmgsoft.api.response.model.message.Message;
import cl.rmgsoft.api.response.model.message.MessageType;
import cl.rmgsoft.api.service.AlumnoService;

@RestController
@RequestMapping("/alumno")
//@CrossOrigin(origins = "http://localhost:3000")
public class AlumnoController {
	@Autowired
	private AlumnoService alumnoService;
	@RequestMapping(method = RequestMethod.GET, value = "/obtenerAlumnos", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseObject getListaAlumnos(){
		
		return alumnoService.getListaAlumnos();
	}
}
