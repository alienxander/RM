import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageManagerService from '../../service/MessageManagerService';
import RequestHttpService from '../../service/RequestHttpService';
import {
    Modal,
    Button
} from 'react-bootstrap';

class ModalModificarConductor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conductor: props.conductor
        }
        this.txtIdRef = React.createRef();
        this.txtRutRef = React.createRef();
        this.txtNombreRef = React.createRef();
        this.txtApellidoRef = React.createRef();

    }


    componentDidUpdate(prevState, prevProps) {
        console.log("componentDidUpdate modal modificar", prevState, prevProps, this.props);
        if (prevProps !== this.props) {
            this.setState({ conductor: this.props.conductor });
        }
    }


    componentDidMount() {
        const conductor = this.state.conductor;
        //console.log("BUs componentDidMount: ", this.cmbConductorRef.current);
        if (conductor !== null) {
            this.txtIdRef.current.value = conductor.id;
            this.txtRutRef.current.value = conductor.rut;
            this.txtNombreRef.current.value = conductor.nombre;
            this.txtApellidoRef.current.value = conductor.apellido;


        }
    }


    handleClickGuardar = () => {

        var request = {
            id: this.txtIdRef.current.value,
            rut: this.txtRutRef.current.value,
            nombre: this.txtNombreRef.current.value,
            apellido: this.txtApellidoRef.current.value
        }

        RequestHttpService.sendHttpRequest("PUT", "/conductor/put/modificaConductor", request, this.callModificarConductorOK, this.callModificarConductorError);
    }

    callModificarConductorOK = (response) => {
        if (response.data.Message.code === "00") {
            alert("Bus modificado correctamente");
        } else {
            alert("Error al modificar Bus");
        }
    }

    callModificarConductorError = (error) => {
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
                        Modificar conductor
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
                                        <label for="idTxtId" className="title-input-form">ID</label>
                                        <input type="text" id="idTxtId" ref={this.txtIdRef} className="form-control" placeholder="ID" aria-label="ID" aria-describedby="ID conductor" disabled />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtRut" className="title-input-form">Rut</label>
                                        <input type="text" id="idTxtRut" ref={this.txtRutRef} className="form-control" placeholder="Rut conductor" aria-label="Rut conductor" aria-describedby="Rut conductor" />
                                    </div>
                                </div>
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

ModalModificarConductor.propTypes = {
    show: PropTypes.bool,
    conductor: PropTypes.object,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
};

export default ModalModificarConductor;