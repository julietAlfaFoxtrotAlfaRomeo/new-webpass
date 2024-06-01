import Link from "next/link";
import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
const MyNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container-fluid">
        <Link href="/" passHref>
          <Navbar.Brand>Webpass</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link href="/" passHref>
              <Nav.Link active>Home</Nav.Link>
            </Link>
            <Link href="/link" passHref>
              <Nav.Link>Link</Nav.Link>
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <Link href="/action" passHref>
                <NavDropdown.Item>Action</NavDropdown.Item>
              </Link>
              <Link href="/another-action" passHref>
                <NavDropdown.Item>Another action</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link href="/something-else" passHref>
                <NavDropdown.Item>Something else here</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Nav.Link disabled aria-disabled="true">
              Disabled
            </Nav.Link>
          </Nav>
          <Form className="d-flex" role="search">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="me-2"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
export default MyNavbar;
