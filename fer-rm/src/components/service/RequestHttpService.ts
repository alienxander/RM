import axios from 'axios';
class RequestHttpService{
    public static obtenerAlumnos(
        callBackOk: (response: Object) => void, 
        callBackError: (error: Object) => void
        ){
            axios({
                method: "GET",
                url: "http://localhost:8080/rmgsoft/alumno/obtenerAlumnos",
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                    "Accept": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": '*' 
                },
                responseType: "json",
            }).then(
                (response: Object) => callBackOk(response)
            ).catch(
                (error: Object) => callBackError(error)
            )
    }

    public static obtenerRecorridos(
        callBackOk: (response: Object) => void, 
        callBackError: (error: Object) => void
        ){
            axios({
                method: "GET",
                url: "http://localhost:8080/rmgsoft/recorrido/obtenerRecorridos",
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                    "Accept": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": '*' 
                },
                responseType: "json",
            }).then(
                (response: Object) => callBackOk(response)
            ).catch(
                (error: Object) => callBackError(error)
            )
    }

    public static lookUp(
        request: object,
        callBackOk: (response: Object) => void, 
        callBackError: (error: Object) => void
        ){
            axios({
                method: "POST",
                url: "http://localhost:8080/rmgsoft/lookup/obtenerLista",
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                    "Accept": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": '*' 
                },
                responseType: "json",
                data: request
            }).then(
                (response: Object) => callBackOk(response)
            ).catch(
                (error: Object) => callBackError(error)
            )
    }
}

export default RequestHttpService;