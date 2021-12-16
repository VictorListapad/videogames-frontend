import { useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../images/favpng_video-games-logo-youtube-image.png";
const NavBar = () => {
  const { loggedIn, logOutUser, user } = useContext(AuthContext);
  return (
    <div>
      <Navbar bg="light" className="customNavbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/explore">Explore</NavLink>
            </Nav>
            <Nav>
              {loggedIn ? (
                <>
                  <NavLink to="/addGame">Add Game</NavLink>
                  <button className="btn-primary" onClick={logOutUser}>
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/signIn">Sign In</NavLink>
                  <NavLink to="/signUp">Sign Up</NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
