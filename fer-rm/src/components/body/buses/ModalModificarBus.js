import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    Button
} from 'react-bootstrap';

class ModalModificarBus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bus: props.bus
        }
        this.txtIdRef = React.createRef();
        this.txtPatenteRef = React.createRef();
        this.cmbConductorRef = React.createRef();
        this.txtDescripcionRef = React.createRef();

        this.handleClickGuardar = this.handleClickGuardar.bind(this);
    }


    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate modal modificar", prevState, prevProps, this.props);
        if(prevProps != this.props){
            this.state.bus = this.props.bus;
        }
    }


    componentDidMount(){
        const bus = this.state.bus;
        var selConductor = this.cmbConductorRef.current;
        console.log("BUs componentDidMount: ", this.cmbConductorRef.current);
        if(bus !== null){
            this.txtIdRef.current.value = bus.id;
            this.txtPatenteRef.current.value = bus.patente;
            //selConductor.options.text = bus.conductor;
            for (var i = 0; i < selConductor.options.length; i++) {
                //  Aca haces referencia al "option" actual
                var opt = selConductor.options[i];
                
                if(opt.text === bus.conductor){
                    selConductor.selectedIndex = i;
                    break;
                }
               
            }
            this.txtDescripcionRef.current.value = bus.descripcion;
        }
    }


    handleClickGuardar() {
        // console.log("txtStdNumberRef: ", this.txtStdNumberRef);
        // alert(this.txtStdNumberRef.current.value);
        var selConductor = this.cmbConductorRef.current;
        this.props.handleSave(this.state.bus, { 
            id: this.txtIdRef.current.value,
            patente: this.txtPatenteRef.current.value,
            conductor: selConductor.options[selConductor.selectedIndex].text,
            descripcion: this.txtDescripcionRef.current.value
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
                                        <input type="text" id="idTxtId" ref={this.txtIdRef} className="form-control" placeholder="ID" aria-label="ID" aria-describedby="Identificador del bus" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="form-group">
                                        <label for="idTxtPatente" className="title-input-form">Patente</label>
                                        <input type="text" id="idTxtPatente" ref={this.txtPatenteRef} className="form-control" placeholder="Patente" aria-label="Patente" aria-describedby="Placa Patente del bus" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="idCmbConductor" className="title-input-form">Conductor</label>
                                        <select class="form-control" id="idCmbConductor" ref={this.cmbConductorRef}>
                                            <option value="1">Conductor 1</option>
                                            <option value="2">Conductor 2</option>
                                            <option value="3">Conductor 3</option>
                                            <option value="4">Conductor 4</option>
                                        </select>
                                    </div>
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