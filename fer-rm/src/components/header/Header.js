import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Redirect
} from "react-router-dom";
import MantenedorAlumnos from '../body/alumnos/MantenedorAlumnos';
import Body from '../body/Body';
import MantenedorBuses from '../body/buses/MantenedorBuses';
import MantenedorConductores from '../body/conductores/MantenedorConductores';
import ConsultaPagos from '../body/pagos/ConsultaPagos';
import CargaListadoPagos from '../body/pagos/CargaListadoPagos';
import Menu from './Menu';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <Route exact path={`${this.props.match.url}/home`}>
                        <Body />
                    </Route>
                    <Route exact path={`${this.props.match.url}/MantenedorAlumnos`}
                                 component={() => <MantenedorAlumnos />}
                    />
                    <Route exact path={`${this.props.match.url}/MantenedorBuses`}
                                 component={() => <MantenedorBuses />}
                    />
                    <Route exact path={`${this.props.match.url}/MantenedorConductores`}>
                        <MantenedorConductores />
                    </Route>
                    <Route exact path={`${this.props.match.url}/ConsultaPagos`}>
                        <ConsultaPagos />
                    </Route>
                    <Route exact path={`${this.props.match.url}/CargaListadoPagos`}>
                        <CargaListadoPagos />
                    </Route>
                </div>
                <Redirect to={`${this.props.match.url}/home`} />
            </Router>
            // <div>
            //     <Menu />
            // </div>
            
        );
    }
}

export default Header;