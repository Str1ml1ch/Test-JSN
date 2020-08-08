import React from 'react'
import * as ReactBootstrap from "react-bootstrap"
import {NavLink} from 'react-router-dom'
import '../css/Navbar.css'

export const Navigation = () =>
{
  return(
    <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <ReactBootstrap.Navbar.Brand className="NavigationLogo">TEST</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link><NavLink to="/main" className = "NavLinks">Mainpage</NavLink></ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link><NavLink to="/create" className="NavLinks">Create</NavLink></ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>);
}