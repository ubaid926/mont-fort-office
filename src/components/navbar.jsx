import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppNavbar() {
  const hovered=(e)=>{
        e.target.style.borderBottom="2px solid #2d628c"
  }

  const menuTitle = (<div className='flex column-gap-4'><span className='blueLogoColor'>MENU</span><div className='flex column-gap-1 items-center'><span className='blueBgColor  p-1 rounded-full  '></span><span className='blueBgColor w-1 p-1 rounded-full h-1'></span></div></div>)

  const menuTitle2 = (<div className='flex column-gap-4'><span className='blueLogoColor'>MENU</span><div className='flex column-gap-1 items-center'><span className='blueBgColor  p-1 rounded-full  '></span><span className='blueBgColor w-1 p-1 rounded-full h-1'></span><span className='blueBgColor  p-1 rounded-full  '></span><span className='blueBgColor w-1 p-1 rounded-full h-1'></span></div></div>)

  const newsNum = (<div className='hovered flex items-center  column-gap-3'><span className=' blueLogoColor'>NEWS</span><span className='text-[8px] font-bold text-white rounded-md p-1 my-auto blueBgColor' >14</span>

  </div>)
  return (
    <Navbar collapseOnSelect expand="lg" className="blueTextColor bg-transparent" >
      <Container>
        <Navbar.Brand href="#home" className='blueLogoColor hovered'>MONTFORT GROUP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#features" className='blueTextColor hovered' >MONTFORT TRADING </Nav.Link>
            <Nav.Link href="#pricing" className='blueTextColor hovered'>MONTFORT CAPITAL</Nav.Link>
            <Nav.Link href="#pricing" className='blueTextColor hovered'>MONTFORT MARITIME</Nav.Link>
            <Nav.Link href="#pricing" className='blueTextColor hovered'>FORT ENERGY</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" >{newsNum}</Nav.Link>
            <NavDropdown title={menuTitle2} id="collapsible-nav-dropdown" className=''>
              <NavDropdown.Item href="#action/3.1" className='blueTextColor' >MONTFORT TRADING</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='blueTextColor'>
                MONTFORT CAPITAL
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='blueTextColor'>MONTFORT MARITIME</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='blueTextColor'>
                FORT ENERGY
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;