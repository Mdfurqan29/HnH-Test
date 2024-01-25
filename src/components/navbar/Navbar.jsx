import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from './Style.module.css'
import Logo from '../../imgs/Logo.png'

function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container  className={style.main}>
        <Navbar.Brand href="/" className={style.logo}></Navbar.Brand>
        <img src={Logo} alt="" width='140px'/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className={style.list}>Home</Nav.Link>
            <Nav.Link href="/" className={style.list}>How its Works</Nav.Link>
            <Nav.Link href="/" className={style.list}>Reviews</Nav.Link>
            <Nav.Link href="/" className={style.list}>Pricing</Nav.Link>
            <Nav.Link href="/" className={style.list}>Faq's</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Button  className={style.loginButton}>Login</Button>
            <Button variant="outline-success" className={style.button}>GET STARTED</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;