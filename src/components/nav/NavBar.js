import React from "react"
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';








export const NavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand >Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link >Home</Nav.Link>
                    <Nav.Link >Favorites</Nav.Link>
                    <Nav.Link >Logout</Nav.Link>
                </Nav>
            </Navbar>
        </>

    );

}