import React from 'react'
import { Route , Link} from 'react-router-dom'
import { Navbar, Button, Form, Col, FormControl, Card, } from 'react-bootstrap'
import AddItem from "../AddItem/AddItem"
import Signin from "../../pages/Signin"
import Home from "../../pages/Home"
const NavbarE = () => {
    return (
        <Navbar className="color-nav" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand>
                    <Link to ="/Home">
                    <img
                        alt=""
                        src="./logo.png"
                        width="300"
                        height="100%"
                        className="d-inline-block align-top"
                    />
                    </Link>
                </Navbar.Brand>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end" >
 
            <Link to="/Signin">
                <Button  >Se connecter</Button>
                </Link>
                <Link to="/AddItem">
                <Button  >Créer une annonce</Button>
</Link>
            </Navbar.Collapse>


        </Navbar>
    )
}

export default NavbarE
