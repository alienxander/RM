import React, { Component } from 'react';
import QuickFilteringGrid from '../../custom/CustomTableQuickFiltering';
import Titulo from '../../custom/Titulo';
import ModalModificarBus from './ModalModificarBus';
import ModalNuevoBus from './ModalNuevoBus';
import ModalBusAsignaciones from './ModalBusAsignaciones';
import RequestHttpService from '../../service/RequestHttpService';
import MessageManagerService from '../../service/MessageManagerService';

class MantenedorBuses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaBuses: [],
            showModalNuevo: false,
            showModalModificar: false,
            showModalAsignar: false,
            isShowBtnModificar: false,
            isShowBtnEliminar: false,
            isShowBtnAsignar: false,
            busSeleccionado: null
        }

        this.columns = [{
            field: 'id',
            headerName: 'ID',
            width: 100
        }, {
            field: 'patente',
            headerName: 'Patente',
            width: 150
        }, {
            field: 'descripcion',
            headerName: 'Descripción',
            width: 200
        }, {
            field: 'rutConductor',
            headerName: 'Rut Conductor',
            width: 170
        }, {
            field: 'nomreConductor',
            headerName: 'Nombre Conductor',
            width: 200
        }, {
            field: 'recorrido',
            headerName: 'Recorrido',
            width: 150
        }, {
            field: 'horario',
            headerName: 'Horario',
            width: 200
        }];

    }

    componentWillMount() {
        this.obtenerBuses();
    }

    obtenerBuses = () => {

        this.setState({ listaBuses: [] });
        RequestHttpService.obtenerBuses(this.callObtenerBusesOK, this.callObtenerBusesError);
    }

    callObtenerBusesOK = (response) => {

        const listBusResp = response.data.Body.listaBuses;
        const arrAux = [];
        listBusResp.forEach((data, index) => {
            data["id"] = index + 1;
            arrAux[index] = data;
        });

        this.setState({ listaBuses: arrAux });
    }

    callObtenerBusesError = (error) => {
        MessageManagerService.throwMessageError(error);
    }

    handleOnRowSelect = (row) => {
        this.setState({
            isShowBtnModificar: true,
            isShowBtnEliminar: true,
            isShowBtnAsignar: true,
            busSeleccionado: row
        })
    }

    showModalNuevoBus = () => {
        if (!this.state.showModalNuevo) {
            this.setState({ showModalNuevo: true });
        }
    }

    closeModalNuevoBus = () => {

        //Se llama de nuevo consulta de buses despues de cerrar modal de nuevo bus actualizar grilla. 
        this.obtenerBuses();
        if (this.state.showModalNuevo) {
            this.setState({ showModalNuevo: false });
        }
    }

    showModalModificarBus = () => {
        if (!this.state.showModalModificar) {
            this.setState({ showModalModificar: true });
        }
    }

    closeModalModificarBus = () => {

        //Se llaam de nuevo consulta de buses despues de cerrar modal de nuevo bus para actualizar grilla. 
        this.obtenerBuses();

        if (this.state.showModalModificar) {
            this.setState({ showModalModificar: false });
        }
    }

    showModalAsignar = () => {
        if (!this.state.showModalAsignar) {
            this.setState({ showModalAsignar: true });
        }
    }

    closeModalAsignar = () => {
        //Se llaam de nuevo consulta de buses despues de cerrar modal de asignar para actualizar grilla. 
        this.obtenerBuses();

        if (this.state.showModalAsignar) {
            this.setState({ showModalAsignar: false });
        }
    }

    eliminarBus = () => {
        if (window.confirm('Desea eliminar el bus seleccionado: ' + this.state.busSeleccionado.patente)) {
            //se envía por parámetro ID de bus a eliminar. 
            RequestHttpService.borrarBus(this.state.busSeleccionado.idBus, this.callborrarBusOK, this.callborrarBusError)
        }
    }

    callborrarBusOK = (response) => {
        // console.log("response borrado bus: " + JSON.stringify(response));
        if (response.data.Message.code === "00") {

            alert("Bus Eliminado correctamente");
            //Se llaam de nuevo consulta de buses despues de cerrar modal de nuevo bus para actualizar grilla. 
            this.obtenerBuses();
        } else {

            alert("Error al Eliminar Bus");
        }
    }

    callborrarBusError = (error) => {
        console.log("Error eliminando BUS: ", error);
        MessageManagerService.throwMessageError(error);
    }

    render() {
        return (
            <div>
                {this.state.showModalNuevo ?
                    <ModalNuevoBus show={this.state.showModalNuevo} handleClose={this.closeModalNuevoBus} />
                    : null
                }
                {/* {console.log("bus seleccionado render: ", this.state.busSeleccionado)} */}
                {this.state.showModalModificar ?
                    <ModalModificarBus show={this.state.showModalModificar} bus={this.state.busSeleccionado} handleClose={this.closeModalModificarBus} />
                    : null
                }
                {this.state.showModalAsignar ?
                    <ModalBusAsignaciones show={this.state.showModalAsignar} bus={this.state.busSeleccionado} handleClose={this.closeModalAsignar} />
                    : null
                }
                <div className="container">
                    <Titulo titulo="Mantenedor de buses" />
                    <QuickFilteringGrid
                        dataList={this.state.listaBuses}
                        columns={this.columns}
                        onRowSelect={this.handleOnRowSelect}
                    />
                    <div className="botonera">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="custom-btn" onClick={this.showModalNuevoBus}>Nuevo</button>
                            {this.state.isShowBtnModificar ?
                                <button type="button" className="custom-btn" onClick={this.showModalModificarBus}>Modificar</button>
                                : null
                            }
                            {this.state.isShowBtnEliminar ?
                                <button type="button" className="custom-btn" onClick={this.eliminarBus}>Eliminar</button>
                                : null
                            }
                            {this.state.isShowBtnAsignar ?
                                <button type="button" className="custom-btn" onClick={this.showModalAsignar}>Asignar</button>
                                : null
                            }
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default MantenedorBuses;