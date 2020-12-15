import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
function NavBar(){
  const location = useLocation();
  const btnStyle = {
    width:"100%",
    borderRadius:"none"
  }
  return (
<Nav fill variant="pills">
  <Nav.Item>
    <Link to="/">
    <Button
  style={btnStyle}
    variant={location.pathname==="/" ? "success" : "outline-*"}>Home</Button>
    </Link>
  </Nav.Item>
  <Nav.Item>
  <Link to="/images">
  <Button style={btnStyle} variant={location.pathname==="/images" ? "success" : "outline-*"}>Pixbay Images</Button>
    </Link>
  </Nav.Item>

  <Nav.Item>
  <Link to="/chatapp">
  <Button style={btnStyle} variant={location.pathname==="/chatapp" ? "success" : "outline-*"}>Chat Room App</Button>
  </Link>
  </Nav.Item>

  <Nav.Item>
  <Link to="/photoapp">
  <Button style={btnStyle} variant={location.pathname==="/photoapp" ? "success" : "outline-*"}>Upload Images</Button>
  </Link>
  </Nav.Item>
</Nav>
  );
}

export default NavBar;

