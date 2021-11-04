import React, { Component } from 'react';
import BstCustomTable from '../../custom/BstCustomTable';
import Titulo from '../../custom/Titulo';
import ModalModificarAlumno from './ModalModificarAlumno';
import ModalNuevoAlumno from './ModalNuevoAlumno';


class MantenedorAlumnos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaAlumnos: [],
            showModalNuevo: false,
            showModalModificar: false
        }

        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.showModalNuevoAlumno = this.showModalNuevoAlumno.bind(this);
        this.closeModalNuevoAlumno = this.closeModalNuevoAlumno.bind(this);
        this.showModalModificarAlumno = this.showModalModificarAlumno.bind(this);
        this.closeModalModificarAlumno = this.closeModalModificarAlumno.bind(this);
        this.guardarNuevoAlumno = this.guardarNuevoAlumno.bind(this);

    }

    componentDidMount() {
        const dataListaAlumnos = [
            { stdNumber: '636377', rut: '15.958.325-2', nombre: 'Alexander', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Cam. del Maillin 2846 casa B', telefono: '9999999', curso: '8° A', area: 'HS', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' },
            { stdNumber: '636378', rut: '9.916.493-K', nombre: 'Ana', apellido: 'Vásquez', comuna: 'Lo Barnechea', direccion: 'Cam. El Cajon 19.482', telefono: '9999999', curso: '1° B', area: 'ES', recorrido: 'IDRUNICO2', tipoTransporte: 'BUSXXY' },
            { stdNumber: '636379', rut: '25.334.400-8', nombre: 'Oliver', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Av. Los Litres 1200/5', telefono: '9999999', curso: '1° A', area: 'MS', recorrido: 'IDRUNICO3', tipoTransporte: 'BUSXXZ' },
            { stdNumber: '636370', rut: '17.374.772-1', nombre: 'Javiera', apellido: 'Rojas', comuna: 'Lo Barnechea', direccion: 'Arturo Matte Larrain Sur 2468', telefono: '9999999', curso: '2° A', area: 'ECC', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' },
            { stdNumber: '636377', rut: '15.958.325-2', nombre: 'Alexander', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Cam. del Maillin 2846 casa B', telefono: '9999999', curso: '8° A', area: 'HS', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' },
            { stdNumber: '636378', rut: '9.916.493-K', nombre: 'Ana', apellido: 'Vásquez', comuna: 'Lo Barnechea', direccion: 'Cam. El Cajon 19.482', telefono: '9999999', curso: '1° B', area: 'ES', recorrido: 'IDRUNICO2', tipoTransporte: 'BUSXXY' },
            { stdNumber: '636379', rut: '25.334.400-8', nombre: 'Oliver', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Av. Los Litres 1200/5', telefono: '9999999', curso: '1° A', area: 'MS', recorrido: 'IDRUNICO3', tipoTransporte: 'BUSXXZ' },
            { stdNumber: '636370', rut: '17.374.772-1', nombre: 'Javiera', apellido: 'Rojas', comuna: 'Lo Barnechea', direccion: 'Arturo Matte Larrain Sur 2468', telefono: '9999999', curso: '2° A', area: 'ECC', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' },
            { stdNumber: '636377', rut: '15.958.325-2', nombre: 'Alexander', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Cam. del Maillin 2846 casa B', telefono: '9999999', curso: '8° A', area: 'HS', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' },
            { stdNumber: '636378', rut: '9.916.493-K', nombre: 'Ana', apellido: 'Vásquez', comuna: 'Lo Barnechea', direccion: 'Cam. El Cajon 19.482', telefono: '9999999', curso: '1° B', area: 'ES', recorrido: 'IDRUNICO2', tipoTransporte: 'BUSXXY' },
            { stdNumber: '636379', rut: '25.334.400-8', nombre: 'Oliver', apellido: 'Beck', comuna: 'Lo Barnechea', direccion: 'Av. Los Litres 1200/5', telefono: '9999999', curso: '1° A', area: 'MS', recorrido: 'IDRUNICO3', tipoTransporte: 'BUSXXZ' },
            { stdNumber: '636370', rut: '17.374.772-1', nombre: 'Javiera', apellido: 'Rojas', comuna: 'Lo Barnechea', direccion: 'Arturo Matte Larrain Sur 2468', telefono: '9999999', curso: '2° A', area: 'ECC', recorrido: 'IDRUNICO1', tipoTransporte: 'BUSXXX' }
        ]

        this.setState({ listaAlumnos: dataListaAlumnos });
    }

    handleOnSelect(row, isSelect) {
        alert("Click on select");
        console.log(row, isSelect);
        return true;
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
        var listaAlumnos = this.state.listaAlumnos;
        listaAlumnos.push(registro);
        console.log("Lista nueva: ", listaAlumnos);
        alert("Alumno ingresado correctamente");
        if (this.state.showModalNuevo) {
            this.setState({ 
                showModalNuevo: false,
                listaAlumnos: listaAlumnos
            });
        }
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


    render() {

        const defaultSorted = [{
            dataField: 'apellido',
            order: 'asc'
        }];

        const columns = [{
            dataField: 'stdNumber',
            text: 'Std Number',
            sort: true
        }, {
            dataField: 'rut',
            text: 'Rut',
            sort: true
        }, {
            dataField: 'nombre',
            text: 'Nombre',
            sort: true
        }, {
            dataField: 'apellido',
            text: 'Apellido',
            sort: true
        }, {
            dataField: 'comuna',
            text: 'Comuna',
            sort: true
        }, {
            dataField: 'direccion',
            text: 'Dirección',
            sort: true
        }, {
            dataField: 'telefono',
            text: 'Teléfono',
            sort: true
        }, {
            dataField: 'curso',
            text: 'Curso',
            sort: true
        }, {
            dataField: 'area',
            text: 'Área',
            sort: true
        }, {
            dataField: 'recorrido',
            text: 'Recorrido',
            sort: true
        }, {
            dataField: 'tipoTransporte',
            text: 'Tipo Transporte',
            sort: true
        }];
        return (
            <div>
                <ModalNuevoAlumno show={this.state.showModalNuevo} handleClose={this.closeModalNuevoAlumno} handleSave={this.guardarNuevoAlumno} />
                <ModalModificarAlumno show={this.state.showModalModificar} handleClose={this.closeModalModificarAlumno}/>
                <div className="container">
                    <Titulo titulo="Mantenedor de alumnos" />

                    {console.log("Lista de alumnos", this.state.listaAlumnos)}
                    <BstCustomTable
                        dataList={this.state.listaAlumnos}
                        onSelect={this.handleOnSelect}
                        columns={columns}
                        defaultSorted={defaultSorted}
                    />
                    {/* <BootstrapTable keyField='rut' data={this.state.listaAlumnos} columns={columns} selectRow={selectRow} striped bordered hover /> */}
                    <div className="botonera">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="custom-btn" onClick={this.showModalNuevoAlumno}>Nuevo</button>
                            <button type="button" className="custom-btn" onClick={this.showModalModificarAlumno}>Modificar</button>
                            <button type="button" className="custom-btn">Eliminar</button>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default MantenedorAlumnos;