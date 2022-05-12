import React, { Component } from 'react';
import QuickFilteringGrid from '../../custom/CustomTableQuickFiltering';
import Titulo from '../../custom/Titulo';
import ModalModificarAlumno from './ModalModificarAlumno';
import ModalNuevoAlumno from './ModalNuevoAlumno';
import RequestHttpService from '../../service/RequestHttpService';
import MessageManagerService from '../../service/MessageManagerService';

class MantenedorAlumnos extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listaAlumnos: [],
            showModalNuevo: false,
            showModalModificar: false,
            isShowBtnModificar: false,
            isShowBtnEliminar: false,
            alumnoSeleccionado: null
        }

        this.columns = [{
            field: 'stdNumber',
            headerName: 'Std Number',
            width: 140
        }, {
            field: 'rut',
            headerName: 'Rut',
            width: 110
        }, {
            field: 'nombre',
            headerName: 'Nombre',
            width: 130
        }, {
            field: 'apellido',
            headerName: 'Apellido',
            width: 130
        }, {
            field: 'comuna',
            headerName: 'Comuna',
            width: 130
        }, {
            field: 'direccion',
            headerName: 'Dirección',
            width: 200
        }, {
            field: 'email',
            headerName: 'Mail',
            width: 200
        }, {
            field: 'telefono',
            headerName: 'Teléfono',
            width: 120
        }, {
            field: 'curso',
            headerName: 'Curso',
            width: 120
        }, {
            field: 'area',
            headerName: 'Área',
            width: 120
        }, {
            field: 'recorrido',
            headerName: 'Recorrido',
            width: 120
        }, {
            field: 'tipoTransporte',
            headerName: 'Tipo Transporte',
            width: 130
        }, {
            field: 'sector',
            headerName: 'Sector',
            width: 90
        }, {
            field: 'fechaInicioContrato',
            headerName: 'Inicio Contrato',
            width: 150
        }, {
            field: 'fechaFinContrato',
            headerName: 'Fin Contrato',
            width: 150
        }, {
            field: 'arancelContrato',
            headerName: 'Arancel Contrato',
            width: 150
        }];

        this.handleOnRowSelect = this.handleOnRowSelect.bind(this);
        this.showModalNuevoAlumno = this.showModalNuevoAlumno.bind(this);
        this.closeModalNuevoAlumno = this.closeModalNuevoAlumno.bind(this);
        this.showModalModificarAlumno = this.showModalModificarAlumno.bind(this);
        this.closeModalModificarAlumno = this.closeModalModificarAlumno.bind(this);
        this.guardarNuevoAlumno = this.guardarNuevoAlumno.bind(this);
        this.modificarAlumno = this.modificarAlumno.bind(this);
        this.eliminarAlumno = this.eliminarAlumno.bind(this);

    }

    componentWillMount() {
        // const dataListAlumnos = [
        //     { id: 1, stdNumber: '636377', rut: '15.958.325-2', nombre: 'Alexander', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Cam. del Maillin 2846 casa B', telefono: '9999999', curso: '8° A', area: 'HS', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' },
        //     { id: 2, stdNumber: '636378', rut: '9.916.493-K', nombre: 'Ana', apellido: 'Vásquez', comuna: 'Lo Barnechea', direccion: 'Cam. El Cajon 19.482', telefono: '9999999', curso: '1° B', area: 'ES', recorrido: 'IDRUNICO2', tipoTransporte: 'BUSXXY' },
        //     { id: 3, stdNumber: '636379', rut: '25.334.400-8', nombre: 'Oliver', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Av. Los Litres 1200/5', telefono: '9999999', curso: '1° A', area: 'MS', recorrido: 'IDRUNICO3', tipoTransporte: 'BUSXXZ' },
        //     { id: 4, stdNumber: '636370', rut: '17.374.772-1', nombre: 'Javiera', apellido: 'Rojas', comuna: 'Lo Barnechea', direccion: 'Arturo Matte Larrain Sur 2468', telefono: '9999999', curso: '2° A', area: 'ECC', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' },
        //     { id: 5, stdNumber: '636370', rut: '17.374.772-1', nombre: 'Javiera', apellido: 'Rojas', comuna: 'Lo Barnechea', direccion: 'Arturo Matte Larrain Sur 2468', telefono: '9999999', curso: '2° A', area: 'ECC', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' }
        // ]

        this.obtenerAlumnos();    
       
        //this.setState({ listaAlumnos: dataListAlumnos});
    }

    obtenerAlumnos = () => {
        RequestHttpService.obtenerAlumnos(this.callObtenerAlumnosOK.bind(this), this.callObtenerAlumnosError.bind(this));
    }

    callObtenerAlumnosOK(response){
        var listAlumnos = response.data.Body.listaAlumnos;
        console.log("Response alumnos: ", listAlumnos);
        this.setState({ listaAlumnos: listAlumnos});
    }

    callObtenerAlumnosError(error){
        console.log("Error alumnos: ", error);
        MessageManagerService.throwMessageError(error);
    }

    handleOnRowSelect(row) {
        console.log("Click check row: ", row);
        this.setState({
            isShowBtnModificar: true,
            isShowBtnEliminar: true,
            alumnoSeleccionado: row
        })
    }

    showModalNuevoAlumno() {
        if (!this.state.showModalNuevo) {
            this.setState({ showModalNuevo: true });
        }
    }

    closeModalNuevoAlumno() {
        if (this.state.showModalNuevo) {
            this.setState({ showModalNuevo: false });
        }
    }

    guardarNuevoAlumno(registro){
        console.log(registro);

        RequestHttpService.sendHttpRequest("PUT", "/alumno/guardarAlumno", registro, this.callGuardarAlumnoOK, this.callGuardarAlumnoErr);

        //var listaAlumnos_aux = this.state.listaAlumnos;
        //var listaAlumnos_aux = Object.assign([], this.state.listaAlumnos);
        
        
        // if (this.state.showModalNuevo) {
        //     //this.state.listaAlumnos.rows.push(registro);
        //     listaAlumnos_aux.push(registro);
            
        //     console.log("Lista nueva: ", listaAlumnos_aux);
        //     // setTimeout(() => {
        //     //     this.setState({ 
        //     //         showModalNuevo: false
        //     //     })
        //     //   }, 1000);
            
        //     this.setState(prevState => ({
        //         showModalNuevo: false,
        //         listaAlumnos: listaAlumnos_aux
        //       }))
            
        //     // this.setState({ 
        //     //     listaAlumnos: listaAlumnos_aux
        //     // });
            
        //     alert("Alumno ingresado correctamente");
            
        //     // this.setState({ 
        //     //     listaAlumnos: {columns: this.state.listaAlumnos.columns, rows: listaAlumnos}
        //     // });
        // }
    }

    callGuardarAlumnoOK = (response) => {
        console.log("Alumno guardado correctamente: ", response);
        alert("Alumno guardado correctamente");

        this.obtenerAlumnos();
    }

    callGuardarAlumnoErr = (error) => {
        console.log("Error al guardar el alumno: ", error);
        alert("Error al guardar el alumno");
    }

    showModalModificarAlumno() {
        if (!this.state.showModalModificar) {
            this.setState({ showModalModificar: true });
        }
    }

    closeModalModificarAlumno() {
        if (this.state.showModalModificar) {
            this.setState({ showModalModificar: false });
        }
    }

    modificarAlumno(registro){
        console.log("REGISTRO MODIFICAR ALUMNO::: ", registro);

        RequestHttpService.sendHttpRequest("PUT", "/alumno/modificarAlumno", registro, this.callModificarAlumnoOK, this.callModificarAlumnoErr);
        
        
    }

    callModificarAlumnoOK = (response) => {
        console.log("Alumno modificado correctamente: ", response);
        alert("Alumno modificado correctamente");

        this.obtenerAlumnos();
    }

    callModificarAlumnoErr = (error) => {
        console.log("Error al modificar el alumno: ", error);
        alert("Error al modificar el alumno");
    }

    eliminarAlumno(){
        //var listaAlumnos_aux = Object.assign([], this.state.listaAlumnos);
        //var indice = listaAlumnos_aux.indexOf(this.state.alumnoSeleccionado);
        console.log("Alumno seleccionado: ", this.state.alumnoSeleccionado);
        
        RequestHttpService.sendHttpRequest("DELETE", "/alumno/eliminarAlumno/" + this.state.alumnoSeleccionado.stdNumber, "", this.callEliminarAlumnoOK, this.callEliminarAlumnoErr);

        
    }

    callEliminarAlumnoOK = (response) => {
        this.obtenerAlumnos();
        alert("Alumno eliminado correctamente");
    }

    callEliminarAlumnoErr = (error) => {
        alert("Error al eliminar alumno: " + error);
    }


    render() {
        return (
            <div>
                {this.state.showModalNuevo?
                    <ModalNuevoAlumno show={this.state.showModalNuevo} alumno={null} isModificar={false} handleClose={this.closeModalNuevoAlumno} handleSave={this.guardarNuevoAlumno} />
                :null
                }
                {console.log("Alumno seleccionado render: ", this.state.alumnoSeleccionado)}
                {this.state.showModalModificar?
                    // <ModalModificarAlumno show={this.state.showModalModificar} alumno={this.state.alumnoSeleccionado} handleClose={this.closeModalModificarAlumno} handleSave={this.modificarAlumno}/>
                    <ModalNuevoAlumno show={this.state.showModalModificar} alumno={this.state.alumnoSeleccionado} isModificar={true} handleClose={this.closeModalModificarAlumno} handleSave={this.modificarAlumno} />
                :null
                }
                <div className="container">
                    <Titulo titulo="Mantenedor de alumnos" />
                    {console.log("Lista Alumnos Custom Table: ", this.state.listaAlumnos)}
                    {/* <CustomTable 
                        dataList={this.state.listaAlumnos}
                        columns={this.columns}
                        onRowSelect={this.handleOnRowSelect}
                    /> */}
                    
                    <QuickFilteringGrid 
                        dataList={this.state.listaAlumnos}
                        columns={this.columns}
                        onRowSelect={this.handleOnRowSelect}
                        
                    />
                    <div className="botonera">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="custom-btn" onClick={this.showModalNuevoAlumno}>Nuevo</button>
                            {this.state.isShowBtnModificar?
                                <button type="button" className="custom-btn" onClick={this.showModalModificarAlumno}>Modificar</button>
                            :null
                            }
                            {this.state.isShowBtnEliminar?
                                <button type="button" className="custom-btn" onClick={this.eliminarAlumno}>Eliminar</button>
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

export default MantenedorAlumnos;