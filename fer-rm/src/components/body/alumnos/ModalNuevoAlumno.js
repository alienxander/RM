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
import TextField from '@mui/material/TextField';
import RequestHttpService from '../../service/RequestHttpService';
import MessageManagerService from '../../service/MessageManagerService';

class ModalNuevoAlumno extends Component {
    listaCursoResponse = [];
    listaComunaResponse = [];
    listaAreaResponse = [];
    alumnoSeleccionado = {};
    constructor(props) {
        super(props);
        this.state = {
            alumno: props.alumno,
            listaAlumno: [],
            listaCurso: [],
            listaComuna: [],
            listaArea: [],
            listaRecorridos: [],
            listaBusesRecorrido: []
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
        this.txtEmailRef = React.createRef();
        this.txtInicioContratoRef = React.createRef();
        this.txtFinContratoRef = React.createRef();
        this.txtArancelContratoRef = React.createRef();
        this.txtSectorRef = React.createRef();

        this.handleClickGuardar = this.handleClickGuardar.bind(this);
    }

    componentWillMount(){
        var requestComuna = {
            tabla: "Comuna"
        }
        RequestHttpService.lookUp(requestComuna, this.callObtenerComunaOK.bind(this), this.callObtenerComunaError.bind(this))

        RequestHttpService.obtenerRecorridos(this.callObtenerRecorridosOK.bind(this), this.callObtenerRecorridosError.bind(this))
        
        

    }

    componentDidMount(){
        //const alumno = this.state.alumno;
        //{ id: 1, stdNumber: '636377', rut: '15.958.325-2', nombre: 'Alexander', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Cam. del Maillin 2846 casa B', telefono: '9999999', curso: '8° A', area: 'HS', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' },
        // console.log("Alumno render modificar: ", alumno);

        //this.obtenerAlumno();

        //  if(alumno !== null){
        //     this.txtStdNumberRef.current.value = alumno.stdNumber;
        //     this.txtRutRef.current.value = alumno.rut;
        //     this.txtNombreRef.current.value = alumno.nombre;
        //     this.txtApellidoRef.current.value = alumno.apellido;
        //     document.getElementById("idCmbComuna").text = alumno.comuna;
        //     this.txtDireccionRef.current.value = alumno.direccion;
        // }

        
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate modal modificar", prevState, prevProps, this.props);
        if(prevProps != this.props){
            this.state.alumno = this.props.alumno;
        }
    }

    

    obtenerAlumno = () => {
        RequestHttpService.sendHttpRequest("GET", "/alumno/obtenerAlumnos/" + this.state.alumno.stdNumber, "", this.callObtenerAlumnoOK.bind(this), this.callObtenerAlumnoError.bind(this));
    }

    callObtenerAlumnoOK(response){
        var listaAlumno = response.data.Body.listaAlumnos;
        
        console.log("Response alumnoooo: ", listaAlumno);
        console.log("Listaaaaa de alumnooos render:: ", this.state.listaAlumno);
        if(listaAlumno.length === 1 && this.props.isModificar){
            this.alumnoSeleccionado = listaAlumno[0];
            this.txtStdNumberRef.current.value = listaAlumno[0].stdNumber;
            this.txtRutRef.current.value = listaAlumno[0].rut;
            this.txtNombreRef.current.value = listaAlumno[0].nombre;
            this.txtApellidoRef.current.value = listaAlumno[0].apellido;
            this.cmbComunaRef.current.value = listaAlumno[0].idComuna;
            this.txtDireccionRef.current.value = listaAlumno[0].direccion;
            this.txtTelefonoRef.current.value = listaAlumno[0].telefono;
            //this.cmbCursoRef.current.value = this.state.listaAlumno[0].idCurso;
            this.cmbAreaRef.current.value = listaAlumno[0].idArea;
            this.txtRecorridoRef.current.value = listaAlumno[0].recorrido;
            this.txtEmailRef.current.value = listaAlumno[0].email;
            this.cmbBusRef.current.value = listaAlumno[0].idBus;
            this.txtSectorRef.current.value = listaAlumno[0].sector;
            this.txtInicioContratoRef.current.value = listaAlumno[0].fechaInicioContrato;
            this.txtFinContratoRef.current.value = listaAlumno[0].fechaFinContrato;
            this.txtArancelContratoRef.current.value = listaAlumno[0].arancelContrato;
            this.requestCurso();
        }
        this.setState({ listaAlumnos: listaAlumno});
    }

    callObtenerAlumnoError(error){
        console.log("Error alumno000: ", error);
        MessageManagerService.throwMessageError(error);
    }

    onChangeCmbArea = () => {
        this.requestCurso();    
    }

    requestCurso = () => {
        var requestCurso = {
            tabla: "Curso",
            campoFilter: "id_area",
            idFilter: this.cmbAreaRef.current.value
        }
        
        
        RequestHttpService.lookUp(requestCurso, this.callObtenerCursoOK.bind(this), this.callObtenerCursoError.bind(this))
    }

    callObtenerCursoOK(response){
        this.listaCursoResponse = response.data.Body;
        console.log("Response cursos:: ", response);

        this.setState({
            listaCurso: this.listaCursoResponse
       });

    //    if(this.props.isModificar){
    //         //this.cmbCursoRef.current.value = this.state.listaAlumno[0].idCurso;
    //    }

       if(this.props.isModificar){
            this.cmbCursoRef.current.value = this.alumnoSeleccionado.idCurso;
            this.obtenerRecorrido();
       }
        
    }

    callObtenerCursoError(error){
        console.log("Error Lista Curso: ", error);
        MessageManagerService.throwMessageError(error);
    }

    obtenerRecorrido = () =>{
        RequestHttpService.sendHttpRequest("GET", "/recorrido/obtenerRecorrido/" + this.txtRecorridoRef.current.value, "", this.callObtenerRecorridoOK, this.callObtenerRecorridoErr);
    }

    callObtenerRecorridoOK = (response) => {
        // this.txtRecorridoRef.current.value = item.codigo;
        console.log("Recorrido:::- ", response);
        this.txtHoraInicioRef.current.value = response.data.Body.horaInicio;
        this.txtHoraFinRef.current.value = response.data.Body.horaFin;
        RequestHttpService.sendHttpRequest("GET", "/bus/obtenerBuses/" + response.data.Body.id, "", this.callObtenetBusesIdRecOK, this.callObtenetBusesIdRecErr);
    }

    callObtenerRecorridoErr(error){
        alert("Error al obtener los datos del recorrido");
        console.log("Error al obtener el recorrido: ", error);
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
             listaComuna: this.listaComunaResponse,
             listaArea: this.listaAreaResponse
        });

        if(this.props.isModificar){
            this.obtenerAlumno();
        }else{
            this.requestCurso();
        }
        

        
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

    handleClickRecorrido = (item) => {
        //alert(item.id);
        this.txtRecorridoRef.current.value = item.codigo;
        this.txtHoraInicioRef.current.value = item.horaInicio;
        this.txtHoraFinRef.current.value = item.horaFin;
        RequestHttpService.sendHttpRequest("GET", "/bus/obtenerBuses/" + item.id, "", this.callObtenetBusesIdRecOK, this.callObtenetBusesIdRecErr);
    }

    callObtenetBusesIdRecOK = (response) => {
        console.log("BUSES POR ID RECORRIDO: ", response.data.Body);
        this.setState({listaBusesRecorrido: response.data.Body.listaBuses});
    }

    callObtenetBusesIdRecErr = (error) => {
        alert("Error al obtener buses para el recorrido seleccionado");
    }

    handleClickBusRecorrido = (item) => {
        console.log("Id Bus Recorrido seleccionado: " + item.id);
    }

    handleClickGuardar() {
        // console.log("txtStdNumberRef: ", this.txtStdNumberRef);
        // alert(this.txtStdNumberRef.current.value);
        if(this.props.isModificar){
            var request = {
                id: this.txtStdNumberRef.current.value,
                stdNumber: this.txtStdNumberRef.current.value,
                rut: this.txtRutRef.current.value,
                nombre: this.txtNombreRef.current.value,
                apellido: this.txtApellidoRef.current.value,
                idComuna: this.cmbComunaRef.current.value,
                direccion: this.txtDireccionRef.current.value,
                telefono: this.txtTelefonoRef.current.value,
                idCurso: this.cmbCursoRef.current.value,
                idArea: this.cmbAreaRef.current.value,
                recorrido: this.txtRecorridoRef.current.value,
                email: this.txtEmailRef.current.value,
                idBus: this.cmbBusRef.current.value,
                sector: this.txtSectorRef.current.value,
                fechaInicioContrato: this.txtInicioContratoRef.current.value,
                fechaFinContrato: this.txtFinContratoRef.current.value,
                arancelContrato: this.txtArancelContratoRef.current.value
            }
        }else{
            var request = {
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
                email: this.txtEmailRef.current.value,
                tipoTransporte: this.cmbBusRef.current.value,
                sector: this.txtSectorRef.current.value,
                fechaInicioContrato: this.txtInicioContratoRef.current.value,
                fechaFinContrato: this.txtFinContratoRef.current.value,
                arancelContrato: this.txtArancelContratoRef.current.value
            }
        }
        
        this.props.handleSave(request);

        console.log("REQUEST GUARDAR ALUMNO:: ", request);
    }


    render() {
        
        return (
            // console.log("Listaaaaa de alumnooos render:: ", this.state.listaAlumno);
            // if(listaAlumno.length === 1){
            //     this.txtStdNumberRef.current.value = listaAlumno[0].stdNumber;
            //     this.txtRutRef.current.value = listaAlumno[0].rut;
            //     this.txtNombreRef.current.value = listaAlumno[0].nombre;
            //     this.txtApellidoRef.current.value = listaAlumno[0].apellido;
            //     this.cmbComunaRef.current.value = listaAlumno[0].idComuna;
            //     this.txtDireccionRef.current.value = listaAlumno[0].direccion;
            //     this.txtTelefonoRef.current.value = listaAlumno[0].telefono;
            //     //this.cmbCursoRef.current.value = this.state.listaAlumno[0].idCurso;
            //     //this.cmbAreaRef.current.value = listaAlumno[0].idArea;
            //     //console.log("List areaa antes de seleccionar combo:... ", this.state.listaArea);
            //     document.getElementById("idCmbArea").value = listaAlumno[0].idArea;
            //     this.txtRecorridoRef.current.value = listaAlumno[0].idRecorrido;
            //     this.txtEmailRef.current.value = listaAlumno[0].email;
            //     this.cmbBusRef.current.value = listaAlumno[0].idBus;
            // }
            <Modal
                show={this.props.show}
                onHide={this.props.handleClose}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    {this.props.isModificar?
                        <Modal.Title id="example-custom-modal-styling-title">    
                            Modificar alumno
                        </Modal.Title>
                    :
                        <Modal.Title id="example-custom-modal-styling-title">    
                            Nuevo alumno
                        </Modal.Title>
                    }
                    
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
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
                                            <label for="idCmbArea" className="title-input-form">Área</label>
                                            <select class="form-control" id="idCmbArea" ref={this.cmbAreaRef} onChange={this.onChangeCmbArea}>
                                                {this.state.listaArea.map((item) => {return <option value={item.codigo}>{item.descripcion}</option>})} 
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="form-group">
                                            <label for="idCmbCurso" className="title-input-form">Curso</label>
                                            <select class="form-control" id="idCmbCurso" ref={this.cmbCursoRef}>
                                                {this.state.listaCurso.map((item) => {return <option value={item.codigo}>{item.descripcion}</option>})}
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
                                            <label for="idCmbComuna" className="title-input-form">Comuna</label>
                                            <select class="form-control" id="idCmbComuna" ref={this.cmbComunaRef}>
                                                {this.state.listaComuna.map((item) => {return <option value={item.codigo}>{item.descripcion}</option>})}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="form-group">
                                            <label for="idTxtTelefono" className="title-input-form">Teléfono</label>
                                            <input type="text" id="idTxtTelefono" ref={this.txtTelefonoRef} className="form-control" placeholder="Teléfono" aria-label="Teléfono" aria-describedby="Teléfono del estudiante" />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label for="idTxtEmail" className="title-input-form">E-Mail</label>
                                            <input type="text" id="idTxtEmail" ref={this.txtEmailRef} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="E-Mail del estudiante" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label for="idTxtSector" className="title-input-form">Sector</label>
                                            <input type="text" id="idTxtSector" ref={this.txtSectorRef} className="form-control" placeholder="Sector" aria-label="Sector" aria-describedby="Sector del estudiante" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="card" style={{ width: '50%' }}>
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
                                                                <div onClick={() => this.handleClickRecorrido(item)}>{item.codigo}</div>
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
                                                {this.state.listaBusesRecorrido.map((item) => {
                                                        return <option value={item.idBus} onClick={() => this.handleClickBusRecorrido(item)}>{item.patente}</option>;
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style={{ width: '50%' }}>
                                <div class="card-header">
                                    Datos del contrato
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="idTxtInicioContrato" className="title-input-form">Inicio Contrato</label>
                                            <input type="date" id="idTxtInicioContrato" ref={this.txtInicioContratoRef} className="form-control" placeholder="Fecha Inicio Contrato" aria-label="Fecha Inicio Contrato" aria-describedby="Fecha Inicio Contrato" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="idTxtFinContrato" className="title-input-form">Fin Contrato</label>
                                            <input type="date" id="idTxtFinContrato" ref={this.txtFinContratoRef} className="form-control" placeholder="Fecha Fin Contrato" aria-label="Fecha Fin Contrato" aria-describedby="Fecha Fin Contrato" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="idTxtArancelContrato" className="title-input-form">Arancel Contrato</label>
                                            <input type="text" id="idTxtArancelContrato" ref={this.txtArancelContratoRef} className="form-control" placeholder="Arancel Contrato" aria-label="Arancel Contrato" aria-describedby="Arancel Contrato" />
                                        </div>
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
    alumno: PropTypes.object,
    isModificar: PropTypes.object,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
};

export default ModalNuevoAlumno;