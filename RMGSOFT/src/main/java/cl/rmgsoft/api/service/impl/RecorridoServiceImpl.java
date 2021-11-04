package cl.rmgsoft.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.rmgsoft.api.dao.RecorridoDAO;
import cl.rmgsoft.api.model.Recorrido;
import cl.rmgsoft.api.response.ResponseObject;
import cl.rmgsoft.api.response.model.message.Message;
import cl.rmgsoft.api.response.model.message.MessageType;
import cl.rmgsoft.api.service.RecorridoService;
@Service("recorridoService")
public class RecorridoServiceImpl implements RecorridoService{
	@Autowired
	private Message message;
	@Autowired
	private ResponseObject responseObject;
	@Autowired
	private RecorridoDAO recorridoDao;
	@Override
	public ResponseObject getRecorridos() {
		// TODO Auto-generated method stub
		List<Recorrido> lista = recorridoDao.getRecorridos();
		message.setCode("00");
		message.setType(MessageType.OK);
		message.setTitle("EXITO");
		message.setDescription("El servicio ha respondido correctamente");
		responseObject.setBody(lista);
		responseObject.setMessage(message);
		return responseObject;
	}

}
