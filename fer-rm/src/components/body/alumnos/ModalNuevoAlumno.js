import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';

import {
    Modal,
    Button,
    InputGroup,
    Dropdown,
    DropdownButton,
    FormControl
} from 'react-bootstrap';
import RequestHttpService from '../../service/RequestHttpService';
import MessageManagerService from '../../service/MessageManagerService';

class ModalNuevoAlumno extends Component {
    listaCursoResponse = [];
    listaComunaResponse = [];
    listaAreaResponse = [];
    constructor(props) {
        super(props);
        this.state = {
            listaCurso: [],
            listaComuna: [],
            listaArea: [],
            listaRecorridos: []
        }
        this.txtStdNumberRef = React.createRef();
        this.txtRutRef = React.createRef();
        this.txtNombreRef = React.createRef();
        this.txtApellidoRef = React.createRef();
        this.txtNombreRef = React.createRef();
        this.cmbComunaRef = React.createRef();
        this.txtDireccionRef = React.createRef();
        this.txtTelefonoRef = React.createRef();
        this.cmbCursoRef = React.createRef();
        this.cmbAreaRef = React.createRef();
        this.cmbRecorridoRef = React.createRef();
        this.txtRecorridoRef = React.createRef();
        this.txtHoraInicioRef = React.createRef();
        this.txtHoraFinRef = React.createRef();
        this.cmbBusRef = React.createRef();

        this.handleClickGuardar = this.handleClickGuardar.bind(this);
    }

    componentWillMount(){
        var requestCurso = {
            tabla: "Curso"
        }
        
        
        RequestHttpService.lookUp(requestCurso, this.callObtenerCursoOK.bind(this), this.callObtenerCursoError.bind(this))
        RequestHttpService.obtenerRecorridos(this.callObtenerRecorridosOK.bind(this), this.callObtenerRecorridosError.bind(this))
        
    }

    callObtenerCursoOK(response){
        var requestComuna = {
            tabla: "Comuna"
        }
        this.listaCursoResponse = response.data.Body;
        console.log("Response curso: ", response);
        RequestHttpService.lookUp(requestComuna, this.callObtenerComunaOK.bind(this), this.callObtenerComunaError.bind(this))
    }

    callObtenerCursoError(error){
        console.log("Error Lista Curso: ", error);
        MessageManagerService.throwMessageError(error);
    }

    callObtenerComunaOK(response){
        var requestArea = {
            tabla: "Area"
        }
        this.listaComunaResponse = response.data.Body;
        console.log("Response comuna: ", response);
        RequestHttpService.lookUp(requestArea, this.callObtenerAreaOK.bind(this), this.callObtenerAreaError.bind(this))
    }

    callObtenerComunaError(error){
        console.log("Error Lista Comuna: ", error);
        MessageManagerService.throwMessageError(error);
    }

    callObtenerAreaOK(response){
        this.listaAreaResponse = response.data.Body;
        console.log("Response Area: ", response);
        this.setState({
             listaCurso: this.listaCursoResponse,
             listaComuna: this.listaComunaResponse,
             listaArea: this.listaAreaResponse
        });
    }

    callObtenerAreaError(error){
        console.log("Error Lista Area: ", error);
        MessageManagerService.throwMessageError(error);
    }

    callObtenerRecorridosOK(response){
        let listaRecorridos = response.data.Body;
        console.log("Response recorridos: ", response);
        this.setState({listaRecorridos: listaRecorridos});
    }

    callObtenerRecorridosError(error){
        console.log("Error Lista recorridos: ", error);
        MessageManagerService.throwMessageError(error);
    }

    handleClickRecorrido = (idrecorrido) => {
        //alert(idrecorrido)
        this.txtRecorridoRef.current.value = idrecorrido;
    }

    handleClickGuardar() {
        // console.log("txtStdNumberRef: ", this.txtStdNumberRef);
        // alert(this.txtStdNumberRef.current.value);
        this.props.handleSave({
            id: this.txtStdNumberRef.current.value,
            stdNumber: this.txtStdNumberRef.current.value,
            rut: this.txtRutRef.current.value,
            nombre: this.txtNombreRef.current.value,
            apellido: this.txtApellidoRef.current.value,
            comuna: this.cmbComunaRef.current.value,
            direccion: this.txtDireccionRef.current.value,
            telefono: this.txtTelefonoRef.current.value,
            curso: this.cmbCursoRef.current.value,
            area: this.cmbAreaRef.current.value,
            recorrido: this.txtRecorridoRef.current.value,
            tipoTransporte: this.cmbBusRef.current.value
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
                        Nuevo alumno
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div class="card" style={{ width: '100%' }}>
                            <div class="card-header">
                                Datos del alumno
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtStdNumber" className="title-input-form">Student Number</label>
                                        <input type="text" id="idTxtStdNumber" ref={this.txtStdNumberRef} className="form-control" placeholder="Student Number" aria-label="Student Number" aria-describedby="Número de estudiante asignado" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtRut" className="title-input-form">Rut</label>
                                        <input type="text" id="idTxtRut" ref={this.txtRutRef} className="form-control" placeholder="Rut" aria-label="Rut" aria-describedby="Rut del estudiante" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="idTxtNombre" className="title-input-form">Nombre</label>
                                        <input type="text" id="idTxtNombre" ref={this.txtNombreRef} className="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="Nombre del estudiante" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="idTxtApellido" className="title-input-form">Apellido</label>
                                        <input type="text" id="idTxtApellido" ref={this.txtApellidoRef} className="form-control" placeholder="Apellido" aria-label="Apellido" aria-describedby="Apellido del estudiante" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idCmbCurso" className="title-input-form">Curso</label>
                                        <select class="form-control" id="idCmbCurso" ref={this.cmbCursoRef}>
                                            {this.state.listaCurso.map((item) => {return <option value={item.codigo}>{item.descripcion}</option>})}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idCmbComuna" className="title-input-form">Comuna</label>
                                        <select class="form-control" id="idCmbComuna" ref={this.cmbComunaRef}>
                                            {this.state.listaComuna.map((item) => {return <option value={item.codigo}>{item.descripcion}</option>})}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="idTxtDireccion" className="title-input-form">Dirección</label>
                                        <input type="text" id="idTxtDireccion" ref={this.txtDireccionRef} className="form-control" placeholder="Dirección" aria-label="Dirección" aria-describedby="Dirección del estudiante" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtTelefono" className="title-input-form">Teléfono</label>
                                        <input type="text" id="idTxtTelefono" ref={this.txtTelefonoRef} className="form-control" placeholder="Teléfono" aria-label="Teléfono" aria-describedby="Teléfono del estudiante" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idCmbArea" className="title-input-form">Área</label>
                                        <select class="form-control" id="idCmbArea" ref={this.cmbAreaRef}>
                                            {this.state.listaArea.map((item) => {return <option value={item.codigo}>{item.descripcion}</option>})} 
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="card" style={{ width: '60%' }}>
                            <div class="card-header">
                                Recorrido
                            </div>
                            <div className="row">
                                <div className="col-6">
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
                                <div className="col-3">
                                    <div className="form-group">
                                        <label for="idTxtHoraInicio" className="title-input-form">Hora Inicio</label>
                                        <input type="time" id="idTxtHoraInicio" ref={this.txtHoraInicioRef} className="form-control" placeholder="Hora Inicio" aria-label="Hora Inicio" aria-describedby="Hora Inicio del recorrido" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label for="idTxtHoraFin" className="title-input-form">Hora Fin</label>
                                        <input type="time" id="idTxtHoraFin" ref={this.txtHoraFinRef} className="form-control" placeholder="Hora Fin" aria-label="Hora Fin" aria-describedby="Hora Final del recorrido" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="idCmbBus" className="title-input-form">Bus</label>
                                        <select class="form-control" id="idCmbBus" ref={this.cmbBusRef}>
                                            <option value="FFAA-32">FFAA-32 AM</option>
                                            <option value="ZZFF-45">ZZFF-45 PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

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

ModalNuevoAlumno.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
};

export default ModalNuevoAlumno;