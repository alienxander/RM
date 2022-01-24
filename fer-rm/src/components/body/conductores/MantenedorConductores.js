import React, { Component } from 'react';
import QuickFilteringGrid from '../../custom/CustomTableQuickFiltering';
import Titulo from '../../custom/Titulo';
import MessageManagerService from '../../service/MessageManagerService';
import RequestHttpService from '../../service/RequestHttpService';
import ModalModificarConductor from './ModalModificarConductor';
import ModalNuevoConductor from './ModalNuevoConductor';


class MantenedorConductores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConductores: [],
            showModalNuevo: false,
            showModalModificar: false,
            isShowBtnModificar: false,
            isShowBtnEliminar: false,
            conductorSeleccionado: null
        }

        this.columns = [
            {
                field: 'id',
                headerName: 'ID',
                width: 200
            },
            {
                field: 'rut',
                headerName: 'Rut',
                width: 200
            }, {
                field: 'nombre',
                headerName: 'Nombre',
                width: 250
            }, {
                field: 'apellido',
                headerName: 'Apellido',
                width: 250
            }
        ];

        this.handleOnRowSelect = this.handleOnRowSelect.bind(this);
        this.showModalNuevoConductor = this.showModalNuevoConductor.bind(this);
        this.closeModalNuevoConductor = this.closeModalNuevoConductor.bind(this);
        this.showModalModificarConductor = this.showModalModificarConductor.bind(this);
        this.closeModalModificarConductor = this.closeModalModificarConductor.bind(this);
        this.eliminarConductor = this.eliminarConductor.bind(this);
    }

    componentDidMount() {

        this.obtenerConductores();
    }

    obtenerConductores = () => {
        this.setState({ listaConductores: [] });

        RequestHttpService.obtenerConductores(this.callObtenerConductoresOK, this.callObtenerConductoresError);
    }

    callObtenerConductoresOK = (response) => {

        console.log("response conductores: " + JSON.stringify(response));

        //const listConductoresResp = response.data.Body.listaConductores;
        // const arrAux = [];
        // listConductoresResp.forEach((data, index) => {
        //     data["id"] = index + 1;
        //     arrAux[index] = data;
        // });

        // this.setState({ listaConductores: arrAux });

        //ori
        var listConductoresResp = response.data.Body.listaConductores;
        this.setState({ listaConductores: listConductoresResp });
    }

    callObtenerConductoresError = (error) => {
        MessageManagerService.throwMessageError(error);
    }

    handleOnRowSelect(row) {
        console.log("Click check row bus: ", row);
        this.setState({
            isShowBtnModificar: true,
            isShowBtnEliminar: true,
            conductorSeleccionado: row
        })
    }

    showModalNuevoConductor() {
        if (!this.state.showModalNuevo) {
            this.setState({ showModalNuevo: true });
        }
    }

    closeModalNuevoConductor() {
        this.obtenerConductores();
        if (this.state.showModalNuevo) {
            this.setState({ showModalNuevo: false });
        }
    }

    showModalModificarConductor() {
        if (!this.state.showModalModificar) {
            this.setState({ showModalModificar: true });
        }
    }

    closeModalModificarConductor() {

        this.obtenerConductores();
        if (this.state.showModalModificar) {
            this.setState({ showModalModificar: false });
        }
    }

    eliminarConductor() {

        if (window.confirm('Desea eliminar el Conductor seleccionado: ' + this.state.conductorSeleccionado.rut)) {
            RequestHttpService.sendHttpRequest("DELETE", "/conductor/delete/" + this.state.conductorSeleccionado.id, "", this.callEliminarConductorOK, this.callEliminarConductorError);
        }
    }

    callEliminarConductorOK = (response) => {
        console.log("response borrado Conductor: " + JSON.stringify(response));
        if (response.data.Message.code === "00") {

            alert("Conductor Eliminado correctamente");
            //Se llama de nuevo consulta de Conductores despues de eliminado exitoso para actualizar grilla. 
            this.obtenerConductores();
        } else {

            alert("Error al Eliminar Conductor");
        }
    }

    callEliminarConductorError = (error) => {
        console.log("Error eliminando Conductor: ", error);
        MessageManagerService.throwMessageError(error);
    }


    render() {
        return (
            <div>
                {this.state.showModalNuevo ?
                    <ModalNuevoConductor show={this.state.showModalNuevo} handleClose={this.closeModalNuevoConductor} />
                    : null
                }
                {console.log("Conductor seleccionado render: ", this.state.conductorSeleccionado)}
                {this.state.showModalModificar ?
                    <ModalModificarConductor show={this.state.showModalModificar} conductor={this.state.conductorSeleccionado} handleClose={this.closeModalModificarConductor} />
                    : null
                }
                <div className="container">
                    <Titulo titulo="Mantenedor de conductores" />
                    {console.log("Lista Conductores Custom Table: ", this.state.listaConductores)}
                    <QuickFilteringGrid
                        dataList={this.state.listaConductores}
                        columns={this.columns}
                        onRowSelect={this.handleOnRowSelect}
                    />
                    <div className="botonera">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="custom-btn" onClick={this.showModalNuevoConductor}>Nuevo</button>
                            {this.state.isShowBtnModificar ?
                                <button type="button" className="custom-btn" onClick={this.showModalModificarConductor}>Modificar</button>
                                : null
                            }
                            {this.state.isShowBtnEliminar ?
                                <button type="button" className="custom-btn" onClick={this.eliminarConductor}>Eliminar</button>
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

export default MantenedorConductores;