import React, { Component } from 'react';
import QuickFilteringGrid from '../../custom/CustomTableQuickFiltering';
import Titulo from '../../custom/Titulo';
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

        this.columns = [{
            field: 'id',
            headerName: 'ID',
            width: 200
        }, {
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
        }, {
            field: 'busAsignado',
            headerName: 'busAsignado',
            width: 250
        }];

        this.handleOnRowSelect = this.handleOnRowSelect.bind(this);
        this.showModalNuevoConductor = this.showModalNuevoConductor.bind(this);
        this.closeModalNuevoConductor = this.closeModalNuevoConductor.bind(this);
        this.showModalModificarConductor = this.showModalModificarConductor.bind(this);
        this.closeModalModificarConductor = this.closeModalModificarConductor.bind(this);
        this.guardarNuevoConductor = this.guardarNuevoConductor.bind(this);
        this.modificarConductor = this.modificarConductor.bind(this);
        this.eliminarConductor = this.eliminarConductor.bind(this);
    }

    componentWillMount() {
        const dataListConductores = [
            { id: '1', rut: '1-9', nombre: 'Conductor1', apellido: 'Uno', busAsignado: 'bkvz-32'},
            { id: '2', rut: '1-8', nombre: 'Conductor2', apellido: 'Dos', busAsignado: 'bkvz-33'},
            { id: '3', rut: '2-1', nombre: 'Conductor3', apellido: 'Tres', busAsignado: 'bkvz-34'}
        ]
       
        this.setState({ listaConductores: dataListConductores});
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
        if (this.state.showModalNuevo) {
            this.setState({ showModalNuevo: false });
        }
    }

    guardarNuevoConductor(registro){
        console.log(registro);
        //var listaAlumnos_aux = this.state.listaAlumnos;
        var listaConductores_aux = Object.assign([], this.state.listaConductores);
        
        
        if (this.state.showModalNuevo) {
            //this.state.listaAlumnos.rows.push(registro);
            listaConductores_aux.push(registro);
            
            console.log("Lista nueva: ", listaConductores_aux);
            // setTimeout(() => {
            //     this.setState({ 
            //         showModalNuevo: false
            //     })
            //   }, 1000);
            
            this.setState(prevState => ({
                showModalNuevo: false,
                listaConductores: listaConductores_aux
              }))
            
            // this.setState({ 
            //     listaAlumnos: listaAlumnos_aux
            // });
            
            alert("Conductor ingresado correctamente");
            
            // this.setState({ 
            //     listaAlumnos: {columns: this.state.listaAlumnos.columns, rows: listaAlumnos}
            // });
        }
    }

    showModalModificarConductor() {
        if (!this.state.showModalModificar) {
            this.setState({ showModalModificar: true });
        }
    }

    closeModalModificarConductor() {
        if (this.state.showModalModificar) {
            this.setState({ showModalModificar: false });
        }
    }

    modificarConductor(registroOriginal, nuevoRegistro){
        console.log("Registro originsl: ", registroOriginal);
        console.log("Registro nuevo: ", nuevoRegistro);
        //var listaAlumnos_aux = this.state.listaAlumnos;
        var listaConductores_aux = Object.assign([], this.state.listaConductores);
        
        
        if (this.state.showModalModificar) {
            //this.state.listaAlumnos.rows.push(registro);
            //const filtredData = this.listaAlumnos_aux.filter(item => item.id !== registro.id);
            //listaAlumnos_aux.push(registro);
            console.log("Lista en modific: ", listaConductores_aux);
            var indice = listaConductores_aux.indexOf(registroOriginal);
            
            console.log("Lista indexOf: ", indice);

            listaConductores_aux[indice] = nuevoRegistro;
            // setTimeout(() => {
            //     this.setState({ 
            //         showModalNuevo: false
            //     })
            //   }, 1000);
            
            this.setState(prevState => ({
                showModalModificar: false,
                listaConductores: listaConductores_aux
              }))
            
            // this.setState({ 
            //     listaAlumnos: listaAlumnos_aux
            // });
            
            alert("Conductor modificdo correctamente");
            
            // this.setState({ 
            //     listaAlumnos: {columns: this.state.listaAlumnos.columns, rows: listaAlumnos}
            // });
        }
    }

    eliminarConductor(){
        var listaConductores_aux = Object.assign([], this.state.listaConductores);
        var indice = listaConductores_aux.indexOf(this.state.conductorSeleccionado);
        console.log("Indice a eliminar: ", indice);
        if(indice !== -1){
            this.setState({
                listaConductores: listaConductores_aux.filter( item => item !== this.state.conductorSeleccionado )
            });

            alert("Conductor eliminado correctamente");
        }

        
    }


    render() {
        return (
            <div>
                {this.state.showModalNuevo?
                    <ModalNuevoConductor show={this.state.showModalNuevo} handleClose={this.closeModalNuevoConductor} handleSave={this.guardarNuevoConductor} />
                :null
                }
                {console.log("Alumno seleccionado render: ", this.state.conductorSeleccionado)}
                {this.state.showModalModificar?
                    <ModalModificarConductor show={this.state.showModalModificar} conductor={this.state.conductorSeleccionado} handleClose={this.closeModalModificarConductor} handleSave={this.modificarConductor}/>
                :null
                }
                <div className="container">
                    <Titulo titulo="Mantenedor de conductores" />
                    {console.log("Lista Conductores Custom Table: ", this.state.listaConductores)}
                    {/* <CustomTable 
                        dataList={this.state.listaAlumnos}
                        columns={this.columns}
                        onRowSelect={this.handleOnRowSelect}
                    /> */}
                    <QuickFilteringGrid 
                        dataList={this.state.listaConductores}
                        columns={this.columns}
                        onRowSelect={this.handleOnRowSelect}
                    />
                    <div className="botonera">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="custom-btn" onClick={this.showModalNuevoConductor}>Nuevo</button>
                            {this.state.isShowBtnModificar?
                                <button type="button" className="custom-btn" onClick={this.showModalModificarConductor}>Modificar</button>
                            :null
                            }
                            {this.state.isShowBtnEliminar?
                                <button type="button" className="custom-btn" onClick={this.eliminarConductor}>Eliminar</button>
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

export default MantenedorConductores;