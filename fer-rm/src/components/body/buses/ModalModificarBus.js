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
        this.cmbConductorRef = React.createRef();
        this.tagConductorRef = React.createRef();
        this.txtDescripcionRef = React.createRef();
        this.cmbRecorridoRef = React.createRef();
        this.txtRecorridoRef = React.createRef();

    }


    componentDidUpdate(prevState, prevProps) {
        console.log("componentDidUpdate modal modificar", prevState, prevProps, this.props);
        if (prevProps != this.props) {
            this.state.bus = this.props.bus;
        }
    }

    componentDidMount() {

        RequestHttpService.obtenerConductores(this.callobtenerConductoresOK, this.callobtenerConductoresError);
        RequestHttpService.obtenerRecorridos(this.callObtenerRecorridosOK, this.callObtenerRecorridosError);

        const bus = this.state.bus;
        var selConductor = this.cmbConductorRef.current;
        console.log("BUs componentDidMount: ", this.cmbConductorRef.current);
        console.log("BUs selConductor: ", selConductor);
        if (bus !== null) {
            this.txtIdRef.current.value = bus.id;
            this.txtPatenteRef.current.value = bus.patente;
            //selConductor.options.text = bus.conductor;
            // for (var i = 0; i < selConductor.options.length; i++) {
            //     //  Aca haces referencia al "option" actual
            //     var opt = selConductor.options[i];

            //     if (opt.text === bus.conductor) {
            //         selConductor.selectedIndex = i;
            //         break;
            //     }

            // }
            this.txtDescripcionRef.current.value = bus.descripcion;
        }
    }

    callobtenerConductoresOK = (response) => {
        let listaConductores = response.data.Body;
        console.log("Response Conductores: ", JSON.stringify(response));
        this.setState({ listaConductores: listaConductores });
    }

    callobtenerConductoresError = (error) => {
        console.log("Error Lista conductores: ", error);
        MessageManagerService.throwMessageError(error);
    }

    callObtenerRecorridosOK = (response) => {
        let listaRecorridos = response.data.Body;
        console.log("Response recorridos: ", response);
        this.setState({ listaRecorridos: listaRecorridos });
    }

    callObtenerRecorridosError = (error) => {
        console.log("Error Lista recorridos: ", error);
        MessageManagerService.throwMessageError(error);
    }

    handleClickGuardar = () => {

        var request = {
            id: this.txtIdRef.current.value,
            patente: this.txtPatenteRef.current.value,
            idConductor: this.cmbConductorRef.current.value,
            descripcion: this.txtDescripcionRef.current.value,
            idRecorrido: this.txtRecorridoRef.current.value
        }

        RequestHttpService.modificaBus(request, this.callModificaBusOK, this.callModificaBusError);

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

    handleClickConductor = (idConductor, rutConductor) => {
        this.cmbConductorRef.current.value = idConductor;
        this.tagConductorRef.current.value = rutConductor;
    }

    handleClickRecorrido = (idrecorrido) => {
        this.txtRecorridoRef.current.value = idrecorrido;
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
                                <div className="col-3">

                                    <label for="idCmbConductor" className="title-input-form">Conductor</label>
                                    <InputGroup className="mb-3">
                                        <DropdownButton
                                            className="title-input-form"
                                            variant="outline-secondary"
                                            title="Conductor"
                                            id="idCmbConductor"
                                            ref={this.cmbConductorRef}
                                        >
                                            {this.state.listaConductores.map((item) => {
                                                return <Dropdown.Item href="#">
                                                    <div onClick={() => this.handleClickConductor(item.id, item.rut)}>{item.nombre} {item.apellido} </div>
                                                </Dropdown.Item>;
                                            })
                                            }

                                        </DropdownButton>
                                        <FormControl aria-label="Lista de Conductores" id="idTxtConductor" ref={this.tagConductorRef} />
                                    </InputGroup>

                                </div>

                                <div className="col-3">
                                    <label for="idCmbRecorrido" className="title-input-form">Recorrido</label>
                                    <InputGroup className="mb-3">
                                        <DropdownButton
                                            className="title-input-form"
                                            variant="outline-secondary"
                                            title="Recorrido"
                                            id="idCmbRecorrido"
                                            ref={this.cmbRecorridoRef}
                                        >
                                            {this.state.listaRecorridos.map((item) => {
                                                return <Dropdown.Item href="#">
                                                    <div onClick={() => this.handleClickRecorrido(item.id)}>{item.codigo}</div>
                                                </Dropdown.Item>;
                                            })
                                            }

                                        </DropdownButton>
                                        <FormControl aria-label="Lista de recorridos" id="idTxtRecorrido" ref={this.txtRecorridoRef} />
                                    </InputGroup>
                                </div>

                            </div>
                            <div className="row">
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