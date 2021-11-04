import React, { Component } from 'react';
import QuickFilteringGrid from '../../custom/CustomTableQuickFiltering';
import Titulo from '../../custom/Titulo';
import ModalModificarBus from './ModalModificarBus';
import ModalNuevoBus from './ModalNuevoBus';

class MantenedorBuses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaBuses: [],
            showModalNuevo: false,
            showModalModificar: false,
            isShowBtnModificar: false,
            isShowBtnEliminar: false,
            busSeleccionado: null
        }

        this.columns = [{
            field: 'id',
            headerName: 'ID',
            width: 200
        }, {
            field: 'patente',
            headerName: 'Patente',
            width: 200
        }, {
            field: 'conductor',
            headerName: 'Conductor',
            width: 250
        }, {
            field: 'descripcion',
            headerName: 'Descripción',
            width: 600
        }];

        this.handleOnRowSelect = this.handleOnRowSelect.bind(this);
        this.showModalNuevoBus = this.showModalNuevoBus.bind(this);
        this.closeModalNuevoBus = this.closeModalNuevoBus.bind(this);
        this.showModalModificarBus = this.showModalModificarBus.bind(this);
        this.closeModalModificarBus = this.closeModalModificarBus.bind(this);
        this.guardarNuevoBus = this.guardarNuevoBus.bind(this);
        this.modificarBus = this.modificarBus.bind(this);
        this.eliminarBus = this.eliminarBus.bind(this);

    }

    componentWillMount() {
        const dataListBuses = [
            { id: '1', patente: 'BKVZ-32', conductor: 'Alexander Beck', descripcion: 'Bus negro capacidad 30 personas'},
            { id: '2', patente: 'CJ45-34', conductor: 'Oliver Beck', descripcion: 'Bus blanco capacidad 30 personas'},
            { id: '3', patente: 'AABB-12', conductor: 'Conductor Amarillo', descripcion: 'Furgon amarillo capacidad 15 personas'},
            { id: '4', patente: 'BZ56-13', conductor: 'Conductor Rojo', descripcion: 'Furgon rojo capacidad 15 personas'}
        ]
       
        this.setState({ listaBuses: dataListBuses});
    }

    handleOnRowSelect(row) {
        console.log("Click check row bus: ", row);
        this.setState({
            isShowBtnModificar: true,
            isShowBtnEliminar: true,
            busSeleccionado: row
        })
    }

    showModalNuevoBus() {
        if (!this.state.showModalNuevo) {
            this.setState({ showModalNuevo: true });
        }
    }

    closeModalNuevoBus() {
        if (this.state.showModalNuevo) {
            this.setState({ showModalNuevo: false });
        }
    }

    guardarNuevoBus(registro){
        console.log(registro);
        //var listaAlumnos_aux = this.state.listaAlumnos;
        var listaBuses_aux = Object.assign([], this.state.listaBuses);
        
        
        if (this.state.showModalNuevo) {
            //this.state.listaAlumnos.rows.push(registro);
            listaBuses_aux.push(registro);
            
            console.log("Lista nueva: ", listaBuses_aux);
            // setTimeout(() => {
            //     this.setState({ 
            //         showModalNuevo: false
            //     })
            //   }, 1000);
            
            this.setState(prevState => ({
                showModalNuevo: false,
                listaBuses: listaBuses_aux
              }))
            
            // this.setState({ 
            //     listaAlumnos: listaAlumnos_aux
            // });
            
            alert("Bus ingresado correctamente");
            
            // this.setState({ 
            //     listaAlumnos: {columns: this.state.listaAlumnos.columns, rows: listaAlumnos}
            // });
        }
    }

    showModalModificarBus() {
        if (!this.state.showModalModificar) {
            this.setState({ showModalModificar: true });
        }
    }

    closeModalModificarBus() {
        if (this.state.showModalModificar) {
            this.setState({ showModalModificar: false });
        }
    }

    modificarBus(registroOriginal, nuevoRegistro){
        console.log("Registro originsl: ", registroOriginal);
        console.log("Registro nuevo: ", nuevoRegistro);
        //var listaAlumnos_aux = this.state.listaAlumnos;
        var listaBuses_aux = Object.assign([], this.state.listaBuses);
        
        
        if (this.state.showModalModificar) {
            //this.state.listaAlumnos.rows.push(registro);
            //const filtredData = this.listaAlumnos_aux.filter(item => item.id !== registro.id);
            //listaAlumnos_aux.push(registro);
            console.log("Lista en modific: ", listaBuses_aux);
            var indice = listaBuses_aux.indexOf(registroOriginal);
            
            console.log("Lista indexOf: ", indice);

            listaBuses_aux[indice] = nuevoRegistro;
            // setTimeout(() => {
            //     this.setState({ 
            //         showModalNuevo: false
            //     })
            //   }, 1000);
            
            this.setState(prevState => ({
                showModalModificar: false,
                listaBuses: listaBuses_aux
              }))
            
            // this.setState({ 
            //     listaAlumnos: listaAlumnos_aux
            // });
            
            alert("Bus modificdo correctamente");
            
            // this.setState({ 
            //     listaAlumnos: {columns: this.state.listaAlumnos.columns, rows: listaAlumnos}
            // });
        }
    }

    eliminarBus(){
        var listaBuses_aux = Object.assign([], this.state.listaBuses);
        var indice = listaBuses_aux.indexOf(this.state.busSeleccionado);
        console.log("Indice a eliminar: ", indice);
        if(indice !== -1){
            this.setState({
                listaBuses: listaBuses_aux.filter( item => item !== this.state.busSeleccionado )
            });

            alert("Bus eliminado correctamente");
        }

        
    }


    render() {
        return (
            <div>
                {this.state.showModalNuevo?
                    <ModalNuevoBus show={this.state.showModalNuevo} handleClose={this.closeModalNuevoBus} handleSave={this.guardarNuevoBus} />
                :null
                }
                {console.log("Alumno seleccionado render: ", this.state.busSeleccionado)}
                {this.state.showModalModificar?
                    <ModalModificarBus show={this.state.showModalModificar} bus={this.state.busSeleccionado} handleClose={this.closeModalModificarBus} handleSave={this.modificarBus}/>
                :null
                }
                <div className="container">
                    <Titulo titulo="Mantenedor de buses" />
                    {console.log("Lista Alumnos Custom Table: ", this.state.listaAlumnos)}
                    {/* <CustomTable 
                        dataList={this.state.listaAlumnos}
                        columns={this.columns}
                        onRowSelect={this.handleOnRowSelect}
                    /> */}
                    <QuickFilteringGrid 
                        dataList={this.state.listaBuses}
                        columns={this.columns}
                        onRowSelect={this.handleOnRowSelect}
                    />
                    <div className="botonera">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="custom-btn" onClick={this.showModalNuevoBus}>Nuevo</button>
                            {this.state.isShowBtnModificar?
                                <button type="button" className="custom-btn" onClick={this.showModalModificarBus}>Modificar</button>
                            :null
                            }
                            {this.state.isShowBtnEliminar?
                                <button type="button" className="custom-btn" onClick={this.eliminarBus}>Eliminar</button>
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

export default MantenedorBuses;