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

class ModalBusAsignaciones extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bus: props.bus,
            listaConductores: [],
            listaRecorridos: [],
            isShowBtnNuevo: false,
            isNewReg: false,
            horario: "",
            idConductor: undefined,
            idRecorrido: undefined
        }
        this.txtIdRef = React.createRef();
        this.txtPatenteRef = React.createRef();
        this.cmbConductorRef = React.createRef();
        this.tagConductorRef = React.createRef();
        this.cmbRecorridoRef = React.createRef();
        this.txtRecorridoRef = React.createRef();
        this.txtHorarioRef = React.createRef();

    }


    componentDidUpdate(prevState, prevProps) {
        // console.log("componentDidUpdate modal modificar", prevState, prevProps, this.props);
        // if (prevProps !== this.props) {
        //     this.setState({ bus: this.props.bus });
        // }
        
    }

    componentDidMount() {

        RequestHttpService.obtenerConductoresLookUp(this.callobtenerConductoresOK, this.callobtenerConductoresError);

        const bus = this.state.bus;
        var selConductor = this.cmbConductorRef.current;

        console.log("BUs selConductor: ", selConductor);
        console.log("BUS SELECCIONADO: ", bus);
        // console.log("BUs componentDidMount: ", this.cmbConductorRef.current);
        // console.log("BUs selConductor: ", selConductor);

        // selConductor.array.forEach(element => {
        //     console.log("CONDUCTOR FOR EACH " , element);

        // });
        if (bus !== null) {
            this.txtIdRef.current.value = bus.idBus;
            this.txtPatenteRef.current.value = bus.patente;

            //this.cmbConductorRef.current.value = bus.id;
            this.tagConductorRef.current.value = bus.rutConductor;
            this.txtRecorridoRef.current.value = bus.recorrido;
            this.txtHorarioRef.current.value = bus.horario;
            if (bus.idBusConductorRecorrido !== "0") {
                this.setState({ isNewReg: true });
            }

            // selConductor.options.text = bus.conductor;
            // for (var i = 0; i < selConductor.options.length; i++) {
            //     //  Aca haces referencia al "option" actual
            //     var opt = selConductor.options[i];

            //     console.log("FOR conductor",opt)

            //     // if (opt.text === bus.conductor) {
            //     //     selConductor.selectedIndex = i;
            //     //     break;
            //     // }

            // }
        }
    }

    callobtenerConductoresOK = (response) => {
        let listaConductores = response.data.Body;
        console.log("Response Conductores: ", JSON.stringify(response));
        this.setState({ listaConductores: listaConductores });
        RequestHttpService.obtenerRecorridos(this.callObtenerRecorridosOK, this.callObtenerRecorridosError);
    }

    callobtenerConductoresError = (error) => {
        console.log("Error Lista conductores: ", error);
        MessageManagerService.throwMessageError(error);
        RequestHttpService.obtenerRecorridos(this.callObtenerRecorridosOK, this.callObtenerRecorridosError);
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

    handleClickNuevo = () => {

        var request = {
            idBus: this.txtIdRef.current.value,
            idBusConductorRecorrido: this.state.bus.idBusConductorRecorrido,
            idConductor: this.cmbConductorRef.current.value !== undefined?this.cmbConductorRef.current.value:this.state.idConductor,
            idRecorrido: this.cmbRecorridoRef.current.value !== undefined?this.cmbRecorridoRef.current.value:this.state.idRecorrido
        }

        console.log("REQUEST NUEVA ASIGNACION:: ", request);

        RequestHttpService.sendHttpRequest("PUT", "/bus/put/asignarNuevoBus", request, this.callNuevoOK, this.callNuevoError);


    }

    callNuevoOK = (response) => {
        if (response.data.Message.code === "00") {
            alert("Nuevo registro creado correctamente");
        } else {
            alert("Error al crear registro");
        }
    }

    callNuevoError = (error) => {
        console.log("Error creando registro: ", error);
        MessageManagerService.throwMessageError(error);
    }

    handleClickActualizar = () => {

        var request = {
            idBus: this.txtIdRef.current.value,
            idBusConductorRecorrido: this.state.bus.idBusConductorRecorrido,
            idConductor: this.cmbConductorRef.current.value !== undefined?this.cmbConductorRef.current.value:this.state.idConductor,
            idRecorrido: this.cmbRecorridoRef.current.value !== undefined?this.cmbRecorridoRef.current.value:this.state.idRecorrido
        }

        console.log("Request actualizar bus: ", request);

        RequestHttpService.sendHttpRequest("PUT", "/bus/put/asignarBus", request, this.callActualizarBusOK, this.callActualizarBusError);

    }

    callActualizarBusOK = (response) => {
        if (response.data.Message.code === "00") {
            alert("Bus Actualizado correctamente");
        } else {
            alert("Error al Actualizar Bus");
        }
    }

    callActualizarBusError = (error) => {
        console.log("Error al Actualizar Bus: ", error);
        MessageManagerService.throwMessageError(error);
    }

    handleClickConductor = (item) => {
        this.cmbConductorRef.current.value = item.id;
        this.tagConductorRef.current.value = item.rut;
        

        if (("1" === this.txtRecorridoRef.current.value && 1 === item.id) || !this.state.isNewReg) {
            this.setState({ isShowBtnNuevo: false });
        } else {
            this.setState({ isShowBtnNuevo: true });
        }
    }

    handleClickRecorrido = (item) => {
        this.cmbRecorridoRef.current.value = item.id;
        this.txtRecorridoRef.current.value = item.codigo;
        this.setState({ horario: item.horaInicio + " - " + item.horaFin,
                        bus: {
                                idBusConductorRecorrido: this.state.bus.idBusConductorRecorrido,
                                horario: item.horaInicio + " - " + item.horaFin,
                             }
                     });

        if ((1 === this.cmbConductorRef.current.value && 1 === item.id) || !this.state.isNewReg) {
            this.setState({ isShowBtnNuevo: false });
        } else {
            this.setState({ isShowBtnNuevo: true });
        }
    }

    handleClickAgregarRecorrido = () => {
        var request = {
            codigo: this.txtRecorridoRef.current.value,
            horaInicio: this.txtNombreRef.current.value,
            horaFin: this.txtApellidoRef.current.value
        }

        RequestHttpService.sendHttpRequest("PUT", "/conductor/put/ingresaConductor", request, this.callIngresaConductorOK, this.callIngresaConductorError);
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
                        Asignaciones
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
                                        <input type="text" id="idTxtPatente" ref={this.txtPatenteRef} className="form-control" placeholder="Patente" aria-label="Patente" aria-describedby="Placa Patente del bus" maxlength="7" disabled />
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
                                            {console.log("value cmbConductorRef combobox ", this.cmbConductorRef)}
                                            
                                            {this.state.listaConductores.map((item) => {
                                                if(item.rut === this.state.bus.rutConductor){
                                                    console.log("ID Conductor es: ", item.id);
                                                    this.state.idConductor = item.id;
                                                }
                                                return <Dropdown.Item href="#" >
                                                    <div onClick={() => this.handleClickConductor(item)}>{item.nombre} {item.apellido} </div>
                                                </Dropdown.Item>;
                                            })
                                            }

                                        </DropdownButton>
                                        {console.log("value tagConductorRef combobox ", this.tagConductorRef)}
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
                                                if(item.codigo === this.state.bus.recorrido){
                                                    console.log("ID Recorrido es: ", item.id);
                                                    this.state.idRecorrido = item.id;
                                                }
                                                return <Dropdown.Item href="#">
                                                    <div onClick={() => this.handleClickRecorrido(item)}>{item.codigo}</div>
                                                    {/* bus.rutConductor;
                                                    this.txtRecorridoRef.current.value = bus.recorrido; */}
                                                </Dropdown.Item>;
                                            })
                                            }

                                        </DropdownButton>
                                        <FormControl aria-label="Lista de recorridos" id="idTxtRecorrido" ref={this.txtRecorridoRef} />
                                    </InputGroup>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtHorario" className="title-input-form">Horario</label>
                                        <input type="text" id="idTxtHorario" value={this.state.bus.horario} ref={this.txtHorarioRef} className="form-control" placeholder="Horario" aria-label="Horario" aria-describedby="Horario Recorrido" maxlength="7" disabled />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <br />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {this.state.isShowBtnNuevo ?
                        <Button variant="primary" onClick={this.handleClickNuevo}>
                            Nuevo
                        </Button>
                        : null
                    }
                    <Button variant="primary" onClick={this.handleClickActualizar}>
                        Modificar
                    </Button>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ModalBusAsignaciones.propTypes = {
    show: PropTypes.bool,
    bus: PropTypes.object,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
};

export default ModalBusAsignaciones;