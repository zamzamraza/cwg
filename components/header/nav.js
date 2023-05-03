import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';



const HeaderNavbar = () => {
  return (
    <>


      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link href='/'> <Image src='/images/cwg-logo.png' width={300} height={70} alt='logo' /></Link> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto menu">


            <Nav.Item><Link href='/'>Home</Link></Nav.Item>
            <Nav.Item><Link href='/about'>About Us</Link></Nav.Item>


            <NavDropdown title="Our Products" id="basic-nav-dropdown">
             
              <NavDropdown.Item><Link href='/skin-care'>Skin Care</Link></NavDropdown.Item>
              <NavDropdown.Item><Link href='/house-hold-products'>House Hold Products</Link></NavDropdown.Item>
              <NavDropdown.Item><Link href='/hair-care'>Hair Care</Link></NavDropdown.Item>
              <NavDropdown.Item><Link href='/oral-hygiene'>Oral Hygiene</Link></NavDropdown.Item>
              <NavDropdown.Item><Link href='/pest-control'>Pest Control</Link></NavDropdown.Item>
              <NavDropdown.Item><Link href='/incense-sticks'>Incense Sticks</Link></NavDropdown.Item>
              <NavDropdown.Item><Link href='/eye-makeup'>Eye Makeup</Link></NavDropdown.Item>
              <NavDropdown.Item><Link href='/cotton-products'>Cotton Products</Link></NavDropdown.Item>
              <NavDropdown.Item><Link href='/adhesive-meterial'>Adhesive Material</Link></NavDropdown.Item>
    
            </NavDropdown>


            <Nav.Item><Link href='/crown-essentials'>Crown Essentials</Link></Nav.Item>
            <Nav.Item><Link href='/our-certificates'>Our Certificates</Link></Nav.Item>
            <Nav.Item><Link href='/our-divisions'>Our Divisions</Link></Nav.Item>
            <Nav.Item><Link href='/contact-us'>Contact us</Link></Nav.Item>
            <Nav.Item className='d-broshure'>
              <span> Download Brochure </span>
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
 
export default HeaderNavbar