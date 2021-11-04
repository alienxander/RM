import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Link,
    withRouter
} from "react-router-dom";
import MantenedorAlumnos from '../body/alumnos/MantenedorAlumnos';
import Body from '../body/Body';
import MantenedorBuses from '../body/buses/MantenedorBuses';
import MantenedorConductores from '../body/conductores/MantenedorConductores';
import ConsultaPagos from '../body/pagos/ConsultaPagos';
import CargaListadoPagos from '../body/pagos/CargaListadoPagos';

export const CONTEXT_PATH = "/rmgsoft";

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Link
                            key="home-link"
                            to={CONTEXT_PATH + "/home"}
                            className="home"
                        >
                            <Navbar.Brand href="#">
                                RMGSoft
                            </Navbar.Brand>
                        </Link>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                {/* <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                                <NavDropdown title="Alumnos" id="collasible-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link
                                            key="MantenedorAlumnos-link"
                                            to={CONTEXT_PATH + "/MantenedorAlumnos"}
                                            className="text-menu"
                                        >
                                            Mantenedor de alumnos
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Buses" id="collasible-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link
                                            key="MantenedorBuses-link"
                                            to={CONTEXT_PATH + "/MantenedorBuses"}
                                            className="text-menu"
                                        >
                                            Mantenedor de buses
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Conductores" id="collasible-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link
                                            key="MantenedorConductores-link"
                                            to={CONTEXT_PATH + "/MantenedorConductores"}
                                            className="text-menu"
                                        >
                                            Mantenedor de conductores
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Pagos" id="collasible-nav-dropdown">
                                    <NavDropdown.Item>
                                        <Link
                                            key="ConsultaPagos-link"
                                            to={CONTEXT_PATH + "/ConsultaPagos"}
                                            className="text-menu"
                                        >
                                            Consulta de pagos
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link
                                            key="CargaListadoPagos-link"
                                            to={CONTEXT_PATH + "/CargaListadoPagos"}
                                            className="text-menu"
                                        >
                                            Carga de listado
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Brand className="header-user">Raul Meza</Navbar.Brand>
                        <Navbar.Brand className="header-user">Administrador</Navbar.Brand>
                        <Navbar.Brand className="header-user"> | </Navbar.Brand>
                        <Navbar.Brand href={CONTEXT_PATH + "/logout.do"} className="header-user">
                            Salir
                        </Navbar.Brand>
                        
                    </Container>
                </Navbar>
            </div>
        );
    }

}

export default (withRouter)(Menu);