import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

import RequestHttpService from '../../service/RequestHttpService';
import MessageManagerService from '../../service/MessageManagerService';

class ModalModificarBus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bus: props.bus,
            listaConductores: [],
            listaRecorridos: []
        }
        this.txtIdRef = React.createRef();
        this.txtPatenteRef = React.createRef();
        this.txtDescripcionRef = React.createRef();

    }

    componentDidMount() {

        const bus = this.state.bus;
        if (bus !== null) {
            this.txtIdRef.current.value = bus.idBus;
            this.txtPatenteRef.current.value = bus.patente;
            this.txtDescripcionRef.current.value = bus.descripcion;
        }
    }

    handleClickGuardar = () => {

        var request = {
            idBus: this.txtIdRef.current.value,
            patente: this.txtPatenteRef.current.value,
            descripcion: this.txtDescripcionRef.current.value
        }

        RequestHttpService.sendHttpRequest("PUT", "/bus/put/modificaBus", request, this.callModificaBusOK, this.callModificaBusError);
    }

    callModificaBusOK = (response) => {
        if (response.data.Message.code === "00") {
            alert("Bus modificado correctamente");
        } else {
            alert("Error al modificar Bus");
        }
    }

    callModificaBusError = (error) => {
        console.log("Error modificar Bus: ", error);
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
                        Modificar bus
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
                                        <label for="idTxtId" className="title-input-form">ID</label>
                                        <input type="text" id="idTxtId" ref={this.txtIdRef} className="form-control" placeholder="ID" aria-label="ID" aria-describedby="Identificador del bus" disabled />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtPatente" className="title-input-form">Patente</label>
                                        <input type="text" id="idTxtPatente" ref={this.txtPatenteRef} className="form-control" placeholder="Patente" aria-label="Patente" aria-describedby="Placa Patente del bus" maxlength="7" />
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

ModalModificarBus.propTypes = {
    show: PropTypes.bool,
    bus: PropTypes.object,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
};

export default ModalModificarBus;