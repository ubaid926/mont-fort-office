import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppNavbar() {
  const [scroll,setScroll]=useState(false)
  // const hovered = (e) => {
  //   e.target.style.borderBottom = "2px solid #2d628c"
  // }

  const menuTitle = (<div className='flex column-gap-4'><span className='blueLogoColor text-[10px]'>MENU</span><div className='flex column-gap-1 items-center'><span className='blueBgColor  p-1 rounded-full  '></span><span className='blueBgColor w-1 p-1 rounded-full h-1'></span></div></div>)

  const menuTitle2 = (<div className='flex column-gap-4'><span className='blueLogoColor text-[10px]'>MENU</span><div className='flex column-gap-1 items-center'><span className='blueBgColor  p-1 rounded-full  '></span><span className='blueBgColor w-1 p-1 rounded-full h-1'></span><span className='blueBgColor  p-1 rounded-full  '></span><span className='blueBgColor w-1 p-1 rounded-full h-1'></span></div></div>)

  const newsNum = (<div className='hovered flex items-center  column-gap-3'><span className=' blueLogoColor text-[10px]'>NEWS</span><span className='text-[8px] font-bold text-white rounded-md p-1 my-auto blueBgColor' >14</span>

  </div>)
  return (
    <Container>
        <Navbar collapseOnSelect expand="lg" className={`blueTextColor mt-23 navbar ${scroll? `bg-transparent`: `navbgWhite`} p-4`} >
        <Navbar.Brand href="#home" className='blueLogoColor logo hovered text-[10px]'>MONTFORT GROUP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#features" className='blueTextColor hovered text-[10px]' >MONTFORT TRADING </Nav.Link>
            <Nav.Link href="#pricing" className='blueTextColor hovered text-[10px]'>MONTFORT CAPITAL</Nav.Link>
            <Nav.Link href="#pricing" className='blueTextColor hovered text-[10px]'>MONTFORT MARITIME</Nav.Link>
            <Nav.Link href="#pricing" className='blueTextColor hovered text-[10px]'>FORT ENERGY</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" >{newsNum}</Nav.Link>
            <NavDropdown title={menuTitle2} id="collapsible-nav-dropdown" className=''>
              <NavDropdown.Item href="#action/3.1" className='blueTextColor ' >MONTFORT TRADING</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='blueTextColor '>
                MONTFORT CAPITAL
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='blueTextColor'>MONTFORT MARITIME</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='blueTextColor text-[10px]'>
                FORT ENERGY
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </Container>
  );
}

export default AppNavbar;