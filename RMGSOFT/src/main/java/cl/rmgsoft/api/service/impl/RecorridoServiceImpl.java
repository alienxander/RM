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
	
	@Override
	public ResponseObject getRecorrido(String codigo) {
		// TODO Auto-generated method stub
		List<Recorrido> lista = recorridoDao.getRecorrido(codigo);
		if(lista.size() == 1) {
			message.setCode("00");
			message.setType(MessageType.OK);
			message.setTitle("EXITO");
			message.setDescription("El servicio ha respondido correctamente");
			responseObject.setBody(lista.get(0));
			responseObject.setMessage(message);
		}else {
			message.setCode("01");
			message.setType(MessageType.ERROR);
			message.setTitle("ERROR");
			message.setDescription("El recorrido no es único");
			responseObject.setBody(null);
			responseObject.setMessage(message);
		}
		
		return responseObject;
	}
	
	@Override
	public ResponseObject putRecorrido(Recorrido recorrido) {
		// TODO Auto-generated method stub
		int response = 0;
		response = recorridoDao.putRecorrido(recorrido);

		// response OK del insert realizado retorna el valor "1"
		if (response == 1) {

			message.setCode("00");
			message.setType(MessageType.OK);
			message.setTitle("EXITO");
			message.setDescription("El servicio ha respondido correctamente");
			responseObject.setBody(recorrido);
		} else {
			responseObject.setBody(null);
			message.setCode("99");
			message.setType(MessageType.ERROR);
			message.setTitle("ERROR");
			message.setDescription("El servicio ha tenido un error");
		}
		
		responseObject.setMessage(message);
		return responseObject;
	}

	

}
