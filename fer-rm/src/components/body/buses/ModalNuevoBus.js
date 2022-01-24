import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

import RequestHttpService from '../../service/RequestHttpService';
import MessageManagerService from '../../service/MessageManagerService';


class ModalNuevoBus extends Component {
    constructor(props) {
        super(props);

        this.txtPatenteRef = React.createRef();
        this.cmbConductorRef = React.createRef();
        this.tagConductorRef = React.createRef();
        this.txtDescripcionRef = React.createRef();
        this.cmbRecorridoRef = React.createRef();
        this.txtRecorridoRef = React.createRef();
    }

    handleClickGuardar = () => {

        var request = {
            patente: this.txtPatenteRef.current.value,
            descripcion: this.txtDescripcionRef.current.value
        }

        RequestHttpService.sendHttpRequest("PUT", "/bus/put/ingresaBus", request, this.callIngresaBusOK, this.callIngresaBusError);
    }

    callIngresaBusOK = (response) => {
        if (response.data.Message.code === "00") {
            alert("Bus ingresado correctamente");
        } else {
            alert("Error al ingresar Bus");
        }
    }

    callIngresaBusError = (error) => {
        console.log("Error ingresar Bus: ", error);
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
                        Nuevo bus
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div class="card" style={{ width: '100%' }}>
                            <div class="card-header">
                                Datos del bus
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtPatente" className="title-input-form">Patente</label>
                                        <input type="text" id="idTxtPatente" ref={this.txtPatenteRef} className="form-control" placeholder="Patente" aria-label="Patente" aria-describedby="Placa Patente del bus" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label for="idTxtDescripcion" className="title-input-form">Descripción</label>
                                        <input type="text" id="idTxtDescripcion" ref={this.txtDescripcionRef} className="form-control" placeholder="Descripción" aria-label="Descripción" aria-describedby="Desccripción del bus" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={this.handleClickGuardar}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ModalNuevoBus.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
};

export default ModalNuevoBus;