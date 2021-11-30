package cl.rmgsoft.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.rmgsoft.api.dao.LookUpDAO;
import cl.rmgsoft.api.model.Conductor;
import cl.rmgsoft.api.model.LookUp;
import cl.rmgsoft.api.request.LookUpRequest;
import cl.rmgsoft.api.response.ResponseObject;
import cl.rmgsoft.api.response.model.message.Message;
import cl.rmgsoft.api.response.model.message.MessageType;
import cl.rmgsoft.api.service.LookUpService;

@Service("lookUpService")
public class LookUpServiceImpl implements LookUpService{
	@Autowired
	private Message message;
	@Autowired
	private ResponseObject responseObject;
	@Autowired
	LookUpDAO lookUpDao;
	@Override
	public ResponseObject getLista(LookUpRequest request) {
		List<LookUp> lista = lookUpDao.getLista(request);
		
		message.setCode("00");
		message.setType(MessageType.OK);
		message.setTitle("EXITO");
		message.setDescription("El servicio ha respondido correctamente");
		responseObject.setBody(lista);
		responseObject.setMessage(message);
		
		return responseObject;
	}
	@Override
	public ResponseObject getConductores() {

		List<Conductor> lista = lookUpDao.getConductores();
		message.setCode("00");
		message.setType(MessageType.OK);
		message.setTitle("EXITO");
		message.setDescription("El servicio ha respondido correctamente");
		responseObject.setBody(lista);
		responseObject.setMessage(message);
		return responseObject;
	}
	
}
