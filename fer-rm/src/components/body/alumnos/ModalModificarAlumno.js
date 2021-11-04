import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    Button,
    InputGroup,
    Dropdown,
    DropdownButton,
    FormControl
} from 'react-bootstrap';

class ModalModificarAlumno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alumno: props.alumno
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

    handleClickRecorrido = (idrecorrido) => {
        //alert(idrecorrido)
        this.txtRecorridoRef.current.value = idrecorrido;
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate modal modificar", prevState, prevProps, this.props);
        if(prevProps != this.props){
            this.state.alumno = this.props.alumno;
        }
    }

    // static getDerivedStateFromProps(props, state){

        
    // }

    componentDidMount(){
        const alumno = this.state.alumno;
        //{ id: 1, stdNumber: '636377', rut: '15.958.325-2', nombre: 'Alexander', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Cam. del Maillin 2846 casa B', telefono: '9999999', curso: '8° A', area: 'HS', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' },
        // console.log("Alumno render modificar: ", alumno);
         if(alumno !== null){
            this.txtStdNumberRef.current.value = alumno.stdNumber;
            this.txtRutRef.current.value = alumno.rut;
            this.txtNombreRef.current.value = alumno.nombre;
            this.txtApellidoRef.current.value = alumno.apellido;
            document.getElementById("idCmbComuna").text = alumno.comuna;
            this.txtDireccionRef.current.value = alumno.direccion;
        }
    }


    handleClickGuardar() {
        // console.log("txtStdNumberRef: ", this.txtStdNumberRef);
        // alert(this.txtStdNumberRef.current.value);
        
        this.props.handleSave(this.state.alumno, { 
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
            recorrido: this.txtIdRecorridoRef.current.value, 
            tipoTransporte: this.cmbBusRef.current.value 
        });
    }


    render() {
        console.log("render modificar modal");
        //const alumno = this.state.alumno;
        //{ id: 1, stdNumber: '636377', rut: '15.958.325-2', nombre: 'Alexander', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Cam. del Maillin 2846 casa B', telefono: '9999999', curso: '8° A', area: 'HS', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' },
        // console.log("Alumno render modificar: ", alumno);
        // if(alumno !== null){
        //     this.txtStdNumberRef.current.value = alumno.stdNumber;
            //document.getElementById("idTxtStdNumber").value = alumno.stdNumber;
            // this.txtRutRef.current.value = alumno.rut;
            // this.txtNombreRef.current.value = alumno.nombre;
            // this.txtApellidoRef.current.value = alumno.apellido;
            // this.cmbComunaRef.current.text = alumno.comuna;
            // this.txtDireccionRef.current.value = alumno.direccion;
        //}
        
        
        // this.props.handleSave({ 
            
        //     telefono: this.txtTelefonoRef.current.value, 
        //     curso: this.cmbCursoRef.current.value, 
        //     area: this.cmbAreaRef.current.value, 
        //     recorrido: this.txtIdRecorridoRef.current.value, 
        //     tipoTransporte: this.cmbBusRef.current.value 
        // });
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.handleClose}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Modificar alumno
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
                                            <option value="1">1° A</option>
                                            <option value="2">2° A</option>
                                            <option value="3">8° A</option>
                                            <option value="4">8° B</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idCmbComuna" className="title-input-form">Comuna</label>
                                        <select class="form-control" id="idCmbComuna" ref={this.cmbComunaRef}>
                                            <option value="1">Santiago</option>
                                            <option value="2">Las Condes</option>
                                            <option value="3" selected>Lo Barnechea</option>
                                            <option value="4">Providencia</option>
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
                                            <option value="HS">HS</option>
                                            <option value="MS">MS</option>
                                            <option value="ECC">ECC</option>
                                            <option value="ES">ES</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="card" style={{ width: '70%' }}>
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
                                            <Dropdown.Item href="#">
                                                <div onClick={() => this.handleClickRecorrido("IDRUNICO1")}>IDRUNICO1</div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <div onClick={() => this.handleClickRecorrido("IDRUNICO2")}>IDRUNICO2</div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <div onClick={() => this.handleClickRecorrido("IDRUNICO3")}>IDRUNICO3</div>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                <div onClick={() => this.handleClickRecorrido("IDRUNICO4")}>IDRUNICO4</div>
                                            </Dropdown.Item>
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

ModalModificarAlumno.propTypes = {
    show: PropTypes.bool,
    alumno: PropTypes.object,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
};

export default ModalModificarAlumno;