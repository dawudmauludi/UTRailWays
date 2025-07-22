import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { logout } from "../../redux/slice/auth/AuthSlice";
import CartIcon from "./cartIcon";

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="shadow"
      style={{ zIndex: 9999,  }}
    >
      <Container>
        <Navbar.Brand as={Link as any} to="/">
          MyApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link as any} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link as any} to="/about" onClick={() => setExpanded(false)}>
              Stasiun
            </Nav.Link>
            <Nav.Link as={Link as any} to="/cart" onClick={() => setExpanded(false)}>
               <CartIcon />
            </Nav.Link>
          </Nav>

          <Nav>
            {isAuthenticated ? (
              <Button
                variant="outline-danger"
                onClick={() => {
                  handleLogout();
                  setExpanded(false);
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                as={Link as any}
                to="/login"
                className="text-white border-0 px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => setExpanded(false)}
              >
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
