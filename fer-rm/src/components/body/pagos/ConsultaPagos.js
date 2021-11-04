import React, { Component } from 'react';
import QuickFilteringGrid from '../../custom/CustomTableQuickFiltering';
import Titulo from '../../custom/Titulo';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import esLocale from 'date-fns/locale/es';
import ModalModificarEstadoPago from './ModalModificarEstadoPago';

class ConsultaPagos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaPagos: [],
            valueFechaPago: null,
            valueFechaCarga: null,
            valueEstadoPago: null,
            showModalCambioEstado: false,
            isShowBtnCambioEstado: false,
            pagoSeleccionado: null
        }

        this.columns = [{
            field: 'sector',
            headerName: 'Sector',
            width: 150
        }, {
            field: 'stdNumber',
            headerName: 'Student Number',
            width: 200
        }, {
            field: 'nombre',
            headerName: 'Nombre',
            width: 200
        }, {
            field: 'apellido',
            headerName: 'Apellido',
            width: 200
        }, {
            field: 'fechaPago',
            headerName: 'Fecha de Pago',
            width: 200
        }, {
            field: 'monto',
            headerName: 'Monto',
            width: 150
        }, {
            field: 'estadoPago',
            headerName: 'Estado',
            width: 150
        }];

        this.txtStdNumberRef = React.createRef();
        this.txtFechaPagoRef = React.createRef();
        this.txtFechaCargaRef = React.createRef();
        this.cmbEstadoPagoRef = React.createRef();

        this.handleOnRowSelect = this.handleOnRowSelect.bind(this);
        this.showModalCambioEstado = this.showModalCambioEstado.bind(this);
        this.closeModalCambioEstado = this.closeModalCambioEstado.bind(this);
        this.cambiarEstadoPago = this.cambiarEstadoPago.bind(this);

    }

    handleOnRowSelect(row) {
        console.log("Click check row pago: ", row);
        this.setState({
            isShowBtnCambioEstado: true,
            pagoSeleccionado: row
        })
    }

    showModalCambioEstado() {
        if (!this.state.showModalCambioEstado) {
            this.setState({ showModalCambioEstado: true });
        }
    }

    closeModalCambioEstado() {
        if (this.state.showModalCambioEstado) {
            this.setState({ showModalCambioEstado: false });
        }
    }

    cambiarEstadoPago(registroOriginal, nuevoRegistro){
        console.log("Registro originsl: ", registroOriginal);
        console.log("Registro nuevo: ", nuevoRegistro);
        //var listaAlumnos_aux = this.state.listaAlumnos;
        var listaPagos_aux = Object.assign([], this.state.listaPagos);
        
        
        if (this.state.showModalCambioEstado) {
            //this.state.listaAlumnos.rows.push(registro);
            //const filtredData = this.listaAlumnos_aux.filter(item => item.id !== registro.id);
            //listaAlumnos_aux.push(registro);
            console.log("Lista en modific: ", listaPagos_aux);
            var indice = listaPagos_aux.indexOf(registroOriginal);
            
            console.log("Lista indexOf: ", indice);

            listaPagos_aux[indice] = nuevoRegistro;
            // setTimeout(() => {
            //     this.setState({ 
            //         showModalNuevo: false
            //     })
            //   }, 1000);
            
            this.setState(prevState => ({
                showModalCambioEstado: false,
                listaPagos: listaPagos_aux
              }))
            
            // this.setState({ 
            //     listaAlumnos: listaAlumnos_aux
            // });
            
            alert("Estado modificado correctamente");
            
            // this.setState({ 
            //     listaAlumnos: {columns: this.state.listaAlumnos.columns, rows: listaAlumnos}
            // });
        }
    }

    componentDidMount() {
        const dataListPagos = [
            { id: '1', sector: '3', stdNumber: '145637', nombre: "Raul", apellido: 'Meza', fechaPago: '02/10/2021', monto: 100000, estadoPago: "Pagado"},
            { id: '2', sector: '4', stdNumber: '145638', nombre: "Mila", apellido: 'Puratich', fechaPago: '', monto: 120000, estadoPago: "Pendiente"},
            { id: '3', sector: '4', stdNumber: '145639', nombre: "Oliver", apellido: 'Beck', fechaPago: '', monto: 120000, estadoPago: "Pendiente"}
        ]
       
        this.setState({ listaPagos: dataListPagos});
    }



    render() {
        return (
            <div>
                {this.state.showModalCambioEstado?
                    <ModalModificarEstadoPago show={this.state.showModalCambioEstado} pago={this.state.pagoSeleccionado} handleClose={this.closeModalCambioEstado} handleSave={this.cambiarEstadoPago} />
                :null
                }
                <div className="container">
                    <Titulo titulo="Consulta de pagos" />
                    <div class="card" style={{ width: '100%' }}>
                        <div className="card-header">
                            Busqueda de pagos
                        </div>
                        <div className="row">
                            <div className="col-2 material-left-margin">
                                <div className="form-group">
                                    <TextField id="idTxtStdNumber" ref={this.txtStdNumberRef} label="Student Number" variant="standard" />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="form-group">
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
                                        <DatePicker
                                            label="Fecha de pago"
                                            value={this.state.valueFechaPago}
                                            onChange={(newValue) => {
                                                this.setState({ valueFechaPago: newValue });
                                            }}
                                            renderInput={(params) => <TextField {...params} id="idTxtFechaPago" ref={this.txtFechaPagoRef} variant="standard" />}
                                            inputFormat="dd/MM/yyyy"
                                            mask="__/__/____"
                                        />
                                    </LocalizationProvider>

                                </div>
                            </div>
                            <div className="col-2 material-top-margin">
                                
                                    <select class="form-control" id="idCmbEstadoPago" ref={this.cmbEstadoPagoRef}>
                                        <option value="" disabled selected>Estado Pago</option>
                                        <option value="1">Todos</option>
                                        <option value="2">Pendiente</option>
                                        <option value="3">Pagado</option>
                                    </select>
                                
                            </div>
                            <div className="col-2 material-top-margin">
                                <Button variant="outlined" endIcon={<SearchIcon />}>
                                    Buscar
                                </Button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <QuickFilteringGrid
                        dataList={this.state.listaPagos}
                        columns={this.columns}
                        onRowSelect={this.handleOnRowSelect}
                    />
                    <div className="botonera">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            {this.state.isShowBtnCambioEstado && this.state.pagoSeleccionado.estadoPago === "Pendiente"?
                                <button type="button" className="custom-btn-lg" onClick={this.showModalCambioEstado}>Cambio de estado</button>
                            :null
                            }
                        </div>
                    </div>
                    <br />
                </div>
            </div>

        );
    }
}

export default ConsultaPagos;