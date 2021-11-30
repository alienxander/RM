package cl.rmgsoft.api.service;

import cl.rmgsoft.api.request.LookUpRequest;
import cl.rmgsoft.api.response.ResponseObject;

public interface LookUpService {
	public ResponseObject getLista(LookUpRequest request);
	public ResponseObject getConductores();
}
