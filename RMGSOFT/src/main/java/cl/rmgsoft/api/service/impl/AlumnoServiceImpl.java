package cl.rmgsoft.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.rmgsoft.api.dao.AlumnoDAO;
import cl.rmgsoft.api.model.Alumno;
import cl.rmgsoft.api.response.ResponseObject;
import cl.rmgsoft.api.response.model.ListaAlumnosResponse;
import cl.rmgsoft.api.response.model.message.Message;
import cl.rmgsoft.api.response.model.message.MessageType;
import cl.rmgsoft.api.service.AlumnoService;
@Service("alumnoService")
public class AlumnoServiceImpl implements AlumnoService{
	@Autowired
	private Message message;
	@Autowired
	private ResponseObject responseObject;
	@Autowired
	private AlumnoDAO alumnoDAO;
	@Override
	public ResponseObject getListaAlumnos() {
		// TODO Auto-generated method stub
		ListaAlumnosResponse listaAlumnosResponse = new ListaAlumnosResponse();
		List<Alumno> listaAlumnos = alumnoDAO.getListaAlumnos();
		listaAlumnosResponse.setListaAlumnos(listaAlumnos);
		
		message.setCode("00");
		message.setType(MessageType.OK);
		message.setTitle("EXITO");
		message.setDescription("El servicio ha respondido correctamente");
		
		responseObject.setBody(listaAlumnosResponse);
		responseObject.setMessage(message);
		return responseObject;
	}
	
	@Override
	public ResponseObject getListaAlumnos(int stdNumber) {
		// TODO Auto-generated method stub
		ListaAlumnosResponse listaAlumnosResponse = new ListaAlumnosResponse();
		List<Alumno> listaAlumnos = alumnoDAO.getListaAlumnos(stdNumber);
		listaAlumnosResponse.setListaAlumnos(listaAlumnos);
		
		if(listaAlumnos.size() == 1) {
			message.setCode("00");
			message.setType(MessageType.OK);
			message.setTitle("EXITO");
			message.setDescription("El servicio ha respondido correctamente");
			
			responseObject.setBody(listaAlumnosResponse);
			responseObject.setMessage(message);
		}else if(listaAlumnos.size() == 0) {
			message.setCode("01");
			message.setType(MessageType.WARNING);
			message.setTitle("WARNING");
			message.setDescription("No existen alumnos para la consulta");
			
			responseObject.setBody(listaAlumnosResponse);
			responseObject.setMessage(message);
		}else if(listaAlumnos.size() > 1){
			message.setCode("02");
			message.setType(MessageType.ERROR);
			message.setTitle("ERROR");
			message.setDescription("El alumno esta duplicado");
			
			responseObject.setBody(listaAlumnosResponse);
			responseObject.setMessage(message);
		}
		
		return responseObject;
	}
	
	@Override
	public ResponseObject guardarAlumno(Alumno alumno) {
		// TODO Auto-generated method stub
		int response = 0;
		response = alumnoDAO.guardarAlumno(alumno);

		// response OK del insert realizado retorna el valor "1"
		if (response == 1) {

			message.setCode("00");
			message.setType(MessageType.OK);
			message.setTitle("EXITO");
			message.setDescription("El servicio ha respondido correctamente");
			responseObject.setBody(alumno);
		} else {

			message.setCode("99");
			message.setType(MessageType.ERROR);
			message.setTitle("ERROR");
			message.setDescription("El servicio ha tenido un error");
			responseObject.setBody(null);
		}

		
		responseObject.setMessage(message);
		return responseObject;
	}

	@Override
	public ResponseObject modificarAlumno(Alumno alumno) {
		// TODO Auto-generated method stub
		int response = 0;
		response = alumnoDAO.modificarAlumno(alumno);

		// response OK del insert realizado retorna el valor "1"
		if (response == 1) {

			message.setCode("00");
			message.setType(MessageType.OK);
			message.setTitle("EXITO");
			message.setDescription("El servicio ha respondido correctamente");
			responseObject.setBody(alumno);
		} else {

			message.setCode("99");
			message.setType(MessageType.ERROR);
			message.setTitle("ERROR");
			message.setDescription("El servicio ha tenido un error");
			responseObject.setBody(null);
		}

		
		responseObject.setMessage(message);
		return responseObject;
	}

	@Override
	public ResponseObject eliminarAlumno(int stdNumber) {
		// TODO Auto-generated method stub
		int response = 0;

		response = alumnoDAO.eliminarAlumno(stdNumber);

		// response OK del insert realizado retorna el valor "1"
		if (response == 1) {

			message.setCode("00");
			message.setType(MessageType.OK);
			message.setTitle("EXITO");
			message.setDescription("El servicio ha respondido correctamente");
		} else {

			message.setCode("99");
			message.setType(MessageType.ERROR);
			message.setTitle("ERROR");
			message.setDescription("El servicio ha tenido un error");
		}

		responseObject.setBody(response);
		responseObject.setMessage(message);
		return responseObject;
	}
	

}
