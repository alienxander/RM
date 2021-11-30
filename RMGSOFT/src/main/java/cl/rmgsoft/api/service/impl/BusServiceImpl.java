package cl.rmgsoft.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.rmgsoft.api.dao.BusDAO;
import cl.rmgsoft.api.model.Bus;
import cl.rmgsoft.api.response.ResponseObject;
import cl.rmgsoft.api.response.model.ListaBusesResponse;
import cl.rmgsoft.api.response.model.message.Message;
import cl.rmgsoft.api.response.model.message.MessageType;
import cl.rmgsoft.api.service.BusService;

@Service("busService")
public class BusServiceImpl implements BusService {
	@Autowired
	private Message message;
	@Autowired
	private ResponseObject responseObject;
	@Autowired
	private BusDAO busDAO;

	@Override
	public ResponseObject getListaBuses() {
		ListaBusesResponse listaBusesResponse = new ListaBusesResponse();
		List<Bus> listaBuses = busDAO.getListaBuses();
		listaBusesResponse.setListaBuses(listaBuses);

		message.setCode("00");
		message.setType(MessageType.OK);
		message.setTitle("EXITO");
		message.setDescription("El servicio ha respondido correctamente");

		responseObject.setBody(listaBusesResponse);
		responseObject.setMessage(message);
		return responseObject;
	}

	@Override
	public ResponseObject putBus(Bus bus) {

		int response = 0;
		response = busDAO.putBus(bus);

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
	public ResponseObject deleteBus(int idBus) {
		int response = 0;

		response = busDAO.deleteBus(idBus);

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
	public ResponseObject updateBus(Bus bus) {

		int response = 0;
		response = busDAO.updateBus(bus);

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
