package cl.rmgsoft.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cl.rmgsoft.api.model.Alumno;
import cl.rmgsoft.api.response.ResponseObject;
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
	
	
	@RequestMapping(method = RequestMethod.GET, value = "/obtenerAlumnos/{stdNumber}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseObject getListaAlumnos(@PathVariable int stdNumber){
		
		return alumnoService.getListaAlumnos(stdNumber);
	}
	
	@PutMapping(value = "/guardarAlumno", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseObject guardarAlumno(@RequestBody Alumno alumno) {

		return alumnoService.guardarAlumno(alumno);
	}
	
	@PutMapping(value = "/modificarAlumno", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseObject modificarAlumno(@RequestBody Alumno alumno) {

		return alumnoService.modificarAlumno(alumno);
	}
	
	@DeleteMapping(value = "/eliminarAlumno/{stdNumber}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseObject eliminarAlumno(@PathVariable int stdNumber) {

		return alumnoService.eliminarAlumno(stdNumber);
	}
}
