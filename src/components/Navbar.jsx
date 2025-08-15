import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import githubLogo from "../assets/githubsid.png";
import linkedinLogo from "../assets/linkedinsid.png";
function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container>
        <Navbar.Brand>Siddharth's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-between">
          <Nav>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/education">Education</NavLink>
            <NavLink className="nav-link" to="/skills">Skills</NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </Nav>
          <div className="d-flex">
            <a href="https://github.com/Siddharthsingh2006" target="_blank" className="nav-link text-white">
                <img src={githubLogo} alt="GitHub" style={{ width: 20, marginRight: 5 }} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/siddharth-baghel-864837356/" target="_blank" className="nav-link text-white">
                <img src={linkedinLogo} alt="LinkedIn" style={{ width: 20, marginRight: 5 }} /> LinkedIn
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
