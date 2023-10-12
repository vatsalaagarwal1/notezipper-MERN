import { Container, Form, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar expand="lg" bg="primary" variant='dark'>
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        Note Zipper
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/myNotes">
                            <Link to='/mynotes'></Link>
                            My Notes
                        </Nav.Link>

                        <NavDropdown title="Vatsala Agarwal" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header