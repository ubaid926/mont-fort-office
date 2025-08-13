import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppNavbar() {
  const [scroll, setScroll] = useState(true)
  const [nav, setnav] = useState(true)
  // const hovered = (e) => {
  //   e.target.style.borderBottom = "2px solid #2d628c"
  // }
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setTimeout(() => {
        setScroll(true)
      }, 4000);
    }
    else {
      if (scroll) {
        setScroll(false)
      }
    }
    if (window.scrollY) {
      setnav(false)
      // console.log('true', nav)
    } else { if (!nav) { setnav(true) } }
    lastScrollY = currentScrollY;
    // console.log(window.scrollY)
  })

  const menuTitle = (<div className='flex items-center column-gap-4'>
    <span className='blueLogoColor text-[10px]'>MENU</span>
    <div className='flex column-gap-1 items-center'>
      <span className='blueBgColor  p-1 rounded-full  '></span>
      <span className='blueBgColor w-1 p-1 rounded-full h-1'></span>
    </div>
  </div>)

  const menuTitle2 = (
    <div className='flex column-gap-4 items-center'>
      <span className='blueLogoColor text-[10px]'>MENU</span>
      <div className='flex column-gap-1 items-center'>
        <span className='blueBgColor  p-1 rounded-full  '></span>
        <span className='blueBgColor w-1 p-1 rounded-full h-1'></span>
        <span className='blueBgColor  p-1 rounded-full  '></span>
        <span className='blueBgColor w-1 p-1 rounded-full h-1'></span>
      </div>
    </div>)

  const newsNum = (
    <div className='hovered flex items-center  column-gap-3'>
      <span className=' blueLogoColor text-[10px]'>NEWS</span>
      <span className='text-[8px] font-bold text-white rounded-md p-1 my-auto blueBgColor' >14</span>
    </div>)

  return (
    <>
      {nav &&
        <div className='navbar w-full '>
          <Container>
            <Navbar collapseOnSelect expand="lg" className={`blueTextColor mx-auto  ${scroll ? `bg-transparent` : `navbgWhite`} p-4`} >
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
                  <NavDropdown title={menuTitle} id="collapsible-nav-dropdown" className=''>
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
        </div>}
    </>
  );
}

export default AppNavbar;