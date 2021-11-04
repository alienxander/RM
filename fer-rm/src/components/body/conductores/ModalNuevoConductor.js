import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';

import {
    Modal,
    Button
} from 'react-bootstrap';

class ModalNuevoConductor extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.txtRutRef = React.createRef();
        this.txtNombreRef = React.createRef();
        this.txtApellidoRef = React.createRef();
        this.cmbBusAsignadoRef = React.createRef();

        this.handleClickGuardar = this.handleClickGuardar.bind(this);
    }

    handleClickGuardar() {
        // console.log("txtStdNumberRef: ", this.txtStdNumberRef);
        // alert(this.txtStdNumberRef.current.value);
        var selBusAsignado = this.cmbBusAsignadoRef.current;
        this.props.handleSave({
            id: 234,
            rut: this.txtRutRef.current.value,
            nombre: this.txtNombreRef.current.value,
            apellido: this.txtApellidoRef.current.value,
            busAsignado: selBusAsignado.options[selBusAsignado.selectedIndex].text
        });
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
                        Nuevo conductor
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div class="card" style={{ width: '100%' }}>
                            <div class="card-header">
                                Datos del conductor
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtRut" className="title-input-form">Rut</label>
                                        <input type="text" id="idTxtRut" ref={this.txtRutRef} className="form-control" placeholder="Rut conductor" aria-label="Rut conductor" aria-describedby="Rut conductor" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtNombre" className="title-input-form">Nombre</label>
                                        <input type="text" id="idTxtNombre" ref={this.txtNombreRef} className="form-control" placeholder="Nombre conductor" aria-label="Nombre conductor" aria-describedby="Nombre conductor" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtApellido" className="title-input-form">Apellido</label>
                                        <input type="text" id="idTxtApellido" ref={this.txtApellidoRef} className="form-control" placeholder="Apellido conductor" aria-label="Apellido conductor" aria-describedby="Apellido conductor" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="idCmbBusAsignado" className="title-input-form">Bus Asignado</label>
                                        <select class="form-control" id="idCmbBusAsignado" ref={this.cmbBusAsignadoRef}>
                                            <option value="1">Bus 1</option>
                                            <option value="2">Bus 2</option>
                                            <option value="3">Bus 3</option>
                                            <option value="4">Bus 4</option>
                                        </select>
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

ModalNuevoConductor.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
};

export default ModalNuevoConductor;