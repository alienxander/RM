import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Modal,
    InputGroup,
    Dropdown,
    DropdownButton,
    FormControl
} from 'react-bootstrap';

import RequestHttpService from '../../service/RequestHttpService';
import MessageManagerService from '../../service/MessageManagerService';

class ModalRecorridos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.txtCodigoRef = React.createRef();
        this.txtHoraInicioRef = React.createRef();
        this.txtHoraFinRef = React.createRef();

    }


    componentDidUpdate(prevState, prevProps) {
        // console.log("componentDidUpdate modal modificar", prevState, prevProps, this.props);
        // if (prevProps !== this.props) {
        //     this.setState({ bus: this.props.bus });
        // }
        
    }

    componentDidMount() {

        
    }

    callobtenerConductoresOK = (response) => {
        let listaConductores = response.data.Body;
        console.log("Response Conductores: ", JSON.stringify(response));
        this.setState({ listaConductores: listaConductores });
        RequestHttpService.obtenerRecorridos(this.callObtenerRecorridosOK, this.callObtenerRecorridosError);
    }

    handleClickAgregarRecorrido = () => {
        var request = {
            codigo: this.txtCodigoRef.current.value,
            horaInicio: this.txtHoraInicioRef.current.value,
            horaFin: this.txtHoraFinRef.current.value
        }

        console.log("AGREGAR RECORRIDO::: ", request);

        RequestHttpService.sendHttpRequest("PUT", "/recorrido/put/ingresarRecorrido", request, this.callIngresaRecorridoOK, this.callIngresaRecorridoError);
    }

    callIngresaRecorridoOK = (response) => {
        if (response.data.Message.code === "00") {
            alert("Nuevo registro creado correctamente");
        } else {
            alert("Error al crear registro");
        }
    }

    callIngresaRecorridoError = (error) => {
        console.log("Error creando registro: ", error);
        MessageManagerService.throwMessageError(error);
    }

    

    render() {
        
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.handleClose}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Recorridos
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div class="card" style={{ width: '100%' }}>
                            <div class="card-header">
                                Datos del recorrido
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtCodigo" className="title-input-form">Código</label>
                                        <input type="text" id="idTxtCodigo" ref={this.txtCodigoRef} className="form-control" placeholder="Código" aria-label="Código" aria-describedby="Código del recorrido"/>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtHoraInicio" className="title-input-form">Hora Inicio</label>
                                        <input type="time" id="idTxtHoraInicio" ref={this.txtHoraInicioRef} className="form-control" placeholder="Hora Inicio" aria-label="Hora Inicio" aria-describedby="Hora Inicio del recorrido" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtHoraFin" className="title-input-form">Hora Fin</label>
                                        <input type="time" id="idTxtHoraFin" ref={this.txtHoraFinRef} className="form-control" placeholder="Hora Fin" aria-label="Hora Fin" aria-describedby="Hora Fin del recorrido" />
                                    </div>
                                </div>



                            </div>
                        </div>
                        <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleClickAgregarRecorrido}>
                        Guardar
                    </Button>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ModalRecorridos.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func
};

export default ModalRecorridos;