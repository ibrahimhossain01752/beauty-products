import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import HomeNav from '../../HomeNav/HomeNav';


const Header = () => {
    const { user, logout} = useAuth();
    return (
        
        <>
        <HomeNav></HomeNav>
           <Navbar className="bg"  sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="nav-head" href="#home">HER PRIDE</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center headerst">
                        <Nav.Link as={HashLink} className=" headerst" to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className=" headerst" to="/Collection">Colllection</Nav.Link>
                         <Nav.Link as={HashLink} className=" headerst" to="/blogs">Blogs</Nav.Link>
                        {/* {user?.email && <Nav.Link as={HashLink} className="text-light" to="/collections">Colllection</Nav.Link>}
                        {user?.email && <Nav.Link as={HashLink} className="text-light" to="/blogs">Blogs</Nav.Link>} */}
                        {user?.email && <Nav.Link as={HashLink} className=" headerst" to="/login">Login</Nav.Link>}
                        {user?.email && <Nav.Link as={HashLink} className=" headerst" to="/dashboard">Dashboard</Nav.Link>}
                        <Navbar.Text><a href="#login" className="text-decoration-none p-2 text-warning"> {user?.displayName} </a> </Navbar.Text>
                        {user?.email ?
                            <Button className="btn11" onClick={logout} variant="primary">logOut</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {/* {user?.email && <Nav.Link as={HashLink} className=" headerst" to="/dashboard">Dashboard</Nav.Link>} */}

                        {/* <Navbar.Text><a href="#login" className="text-decoration-none ">  {user?.displayName}</a> </Navbar.Text> */}
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;