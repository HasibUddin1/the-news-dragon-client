import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='mt-2 mb-2'>Journalism Without Fear or Favour</p>
                <p className='mb-2'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in ea et dolorum saepe sint voluptatibus officiis perferendis soluta doloribus commodi, placeat sed. Voluptates fuga quis quam blanditiis pariatur eaque.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">
                                <Link to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user ?
                                        <Button variant="secondary">Logout</Button> :
                                        <Link to='/login'>
                                            <Button variant="secondary">Login</Button>
                                        </Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;