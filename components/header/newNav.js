import Link from 'next/link'
import React from 'react'
import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NewNav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <Container>



                <div className="logo-container">
                    <Row>
                        <Col xs={9} md={10} lg={12} className='text-center'>
                            <Link href='/'>
                                <img src='/images/cwg-logo.png' className='brand-logo' alt='logo' />
                            </Link>
                        </Col>
                        <Col xs={3} md={2}>
                            <Button variant="light" style={{ marginTop: '10px', marginLeft: '12px' }} className='offcanvas-bttn' onClick={handleShow}>
                                <FontAwesomeIcon icon={faBars} />
                            </Button>
                        </Col>
                    </Row>
                </div>

                <Offcanvas show={show} placement='end' onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Crown WorldWide Group</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <section className="mobile-navbar">
                            <ul>
                                <li><Nav.Item><Link href='/'>Home</Link></Nav.Item></li>
                                <li><Nav.Item><Link href='/about'>About Us</Link></Nav.Item></li>
                                <li><NavDropdown title="Our Products" id="basic-nav-dropdown">

                                    <NavDropdown.Item><Link href='/skin-care' style={{ color: 'black' }}>Skin Care</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link href='/house-hold-products' style={{ color: 'black' }}>House Hold Products</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link href='/hair-care' style={{ color: 'black' }}>Hair Care</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link href='/oral-hygiene' style={{ color: 'black' }}>Oral Hygiene</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link href='/pest-control' style={{ color: 'black' }}>Pest Control</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link href='/incense-sticks' style={{ color: 'black' }}>Incense Sticks</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link href='/eye-makeup' style={{ color: 'black' }}>Eye Makeup</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link href='/cotton-products' style={{ color: 'black' }}>Cotton Products</Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link href='/adhesive-meterial' style={{ color: 'black' }}>Adhesive Material</Link></NavDropdown.Item>

                                </NavDropdown></li>
                                <li><Nav.Item><Link href='/crown-essentials'>Crown Essentials</Link></Nav.Item></li>
                                <li><Nav.Item><Link href='/our-certificates'>Our Certificates</Link></Nav.Item></li>
                                <li> <Nav.Item><Link href='/our-divisions'>Our Divisions</Link></Nav.Item></li>
                                <li> <Nav.Item><Link href='/contact-us'>Contact us</Link></Nav.Item></li>
                                <li> <Nav.Item className='d-broshure'>
                                    <span> <a href="/Updated_Brochure_Crown.pdf" download> Download Brochure </a></span>
                                </Nav.Item></li>
                            </ul>
                        </section>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
            {/* second nav */}
            <section className='second-navbar'>
                <Navbar bg="inherit" expand="lg">
                    <Nav className="me-auto menu">


                        <Nav.Item><Link href='/'>Home</Link></Nav.Item>
                        <Nav.Item><Link href='/about'>About Us</Link></Nav.Item>


                        <NavDropdown title="Our Products" id="basic-nav-dropdown">

                            <NavDropdown.Item as={Link}  style={{ color: 'black' }} href='/skin-care'>Skin Care</NavDropdown.Item>

                            <NavDropdown.Item as={Link} href='/house-hold-products' style={{ color: 'black' }}>House Hold Products</NavDropdown.Item>

                            <NavDropdown.Item as={Link} href='/hair-care'  style={{ color: 'black' }}>Hair Care</NavDropdown.Item>

                            <NavDropdown.Item as={Link} href='/oral-hygiene' style={{ color: 'black' }}>Oral Hygiene</NavDropdown.Item>

                            <NavDropdown.Item as={Link} href='/pest-control' style={{ color: 'black' }}>Pest Control</NavDropdown.Item>

                            <NavDropdown.Item as={Link}  href='/incense-sticks' style={{ color: 'black' }}>Incense Sticks</NavDropdown.Item>

                            <NavDropdown.Item as={Link} href='/cosmetics' style={{ color: 'black' }}>Cosmetic</NavDropdown.Item>

                            <NavDropdown.Item as={Link} href='/cotton-products' style={{ color: 'black' }}>Cotton Products</NavDropdown.Item>

                            <NavDropdown.Item as={Link} href='/adhesive-meterial' style={{ color: 'black' }}>Adhesive Material</NavDropdown.Item>

                        </NavDropdown>


                        <Nav.Item><Link href='/crown-essentials'>Crown Essentials</Link></Nav.Item>
                        <Nav.Item><Link href='/our-certificates'>Our Certificates</Link></Nav.Item>
                        <Nav.Item><Link href='/our-divisions'>Our Divisions</Link></Nav.Item>
                        <Nav.Item><Link href='/contact-us'>Contact us</Link></Nav.Item>
                        <Nav.Item className='d-broshure'>
                            <span> <a href="/Updated_Brochure_Crown.pdf" download> Download Brochure </a></span>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </section>
        </>
    )
}

export default NewNav