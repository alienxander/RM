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

}
