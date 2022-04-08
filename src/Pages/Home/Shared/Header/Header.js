import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const Header = () => {
    const { user, logout} = useAuth();
    return (
        <>
           <Navbar className="bg" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Travel</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-light" to="/home">Home</Nav.Link>
                        {user?.email && <Nav.Link as={HashLink} className="text-light" to="/tradetail">MyOrder</Nav.Link>}
                        {user?.email && <Nav.Link as={HashLink} className="text-light" to="/addService">Add-Service</Nav.Link>}
                        <Navbar.Text><a href="#login" className="text-decoration-none p-2 text-warning"> {user?.displayName} </a> </Navbar.Text>
                        {user?.email ?
                            <Button className="btn11" onClick={logout} variant="primary">logOut</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        {/* <Navbar.Text><a href="#login" className="text-decoration-none ">  {user?.displayName}</a> </Navbar.Text> */}
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;