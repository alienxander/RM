import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    Button
} from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import esLocale from 'date-fns/locale/es';
import { WindowSharp } from '@mui/icons-material';

class ModalModificarEstadoPago extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pago: props.pago,
            valueFechaPago: null
        }
        this.txtFechaPagoRef = React.createRef();
        this.cmbEstadoPagoRef = React.createRef();

        this.handleClickGuardar = this.handleClickGuardar.bind(this);
    }


    componentDidUpdate(prevState, prevProps) {
        console.log("componentDidUpdate modal modificar", prevState, prevProps, this.props);
        if (prevProps != this.props) {
            this.state.pago = this.props.pago;
        }
    }


    componentDidMount() {
        const pago = this.state.pago;
        var selEStadoPago = this.cmbEstadoPagoRef.current;
        console.log("EStado Pago componentDidMount: ", this.cmbEstadoPagoRef.current);
        // if(pago !== null){
        //     this.txtIdRef.current.value = bus.fe;
        //     this.txtPatenteRef.current.value = bus.patente;
        //     //selConductor.options.text = bus.conductor;
        //     for (var i = 0; i < selConductor.options.length; i++) {
        //         //  Aca haces referencia al "option" actual
        //         var opt = selConductor.options[i];

        //         if(opt.text === bus.conductor){
        //             selConductor.selectedIndex = i;
        //             break;
        //         }

        //     }
        //     this.txtDescripcionRef.current.value = bus.descripcion;
        // }
    }


    handleClickGuardar() {
        // console.log("txtStdNumberRef: ", this.txtStdNumberRef);
        
        var selEstadoPago = this.cmbEstadoPagoRef.current;
        this.props.handleSave(this.state.pago, {
            id: this.state.pago.id,
            sector: this.state.pago.sector,
            stdNumber: this.state.pago.stdNumber,
            nombre: this.state.pago.nombre,
            apellido: this.state.pago.apellido,
            fechaPago: this.txtFechaPagoRef.current.value,
            monto: this.state.pago.monto,
            estadoPago: selEstadoPago.options[selEstadoPago.selectedIndex].text
        });
    }


    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.handleClose}
                dialogClassName="modal-50w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Cambio estado de pago
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 material-left-margin">
                                <div className="form-group">
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
                                        <DatePicker
                                            label="Fecha de pago"
                                            id="idDtpFechaPago"
                                            value={this.state.valueFechaPago}
                                            inputRef={this.txtFechaPagoRef}
                                            onChange={(newValue) => {
                                                this.setState({ valueFechaPago: newValue });
                                            }}
                                            renderInput={(params) => <TextField {...params} id="idTxtFechaPago" variant="standard" />}
                                            inputFormat="dd/MM/yyyy"
                                            mask="__/__/____"
                                        />
                                    </LocalizationProvider>

                                </div>
                            </div>
                            <div className="col-4 material-top-margin" >
                            <select class="form-control" id="idCmbEstadoPago" ref={this.cmbEstadoPagoRef}>
                                    <option value="1">Pendiente</option>
                                    <option value="2">Pagado</option>
                                </select>
                            </div>
                        </div>   
                    </div>
                    <br />
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

ModalModificarEstadoPago.propTypes = {
    show: PropTypes.bool,
    pago: PropTypes.object,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
};

export default ModalModificarEstadoPago;