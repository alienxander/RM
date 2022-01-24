package cl.rmgsoft.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.rmgsoft.api.dao.ConductorDAO;
import cl.rmgsoft.api.model.Conductor;
import cl.rmgsoft.api.response.ResponseObject;
import cl.rmgsoft.api.response.model.ListaConductoresResponse;
import cl.rmgsoft.api.response.model.message.Message;
import cl.rmgsoft.api.response.model.message.MessageType;
import cl.rmgsoft.api.service.ConductorService;

@Service("conductorService")
public class ConductorServiceImpl implements ConductorService {
	@Autowired
	private Message message;
	@Autowired
	private ResponseObject responseObject;
	@Autowired
	private ConductorDAO conductorDAO;

	@Override
	public ResponseObject getListaConductores() {
		ListaConductoresResponse listaConductoresResponse = new ListaConductoresResponse();
		List<Conductor> listaConductores = conductorDAO.getListaConductores();
		listaConductoresResponse.setListaConductores(listaConductores);

		message.setCode("00");
		message.setType(MessageType.OK);
		message.setTitle("EXITO");
		message.setDescription("El servicio ha respondido correctamente");

		responseObject.setBody(listaConductoresResponse);
		responseObject.setMessage(message);
		return responseObject;
	}


	@Override
	public ResponseObject putConductor(Conductor conductor) {

		int response = 0;
		response = conductorDAO.putConductor(conductor);

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

		responseObject.setBody(null);
		responseObject.setMessage(message);
		return responseObject;
	}

	@Override
	public ResponseObject deleteConductor(int idConductor) {
		int response = 0;

		response = conductorDAO.deleteConductor(idConductor);

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

		responseObject.setBody(null);
		responseObject.setMessage(message);
		return responseObject;
	}

	@Override
	public ResponseObject updateConductor(Conductor conductor) {

		int response = 0;
		response = conductorDAO.updateConductor(conductor);

		// response OK del update realizado retorna el valor "1"
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

		responseObject.setBody(null);
		responseObject.setMessage(message);
		return responseObject;
	}
}
