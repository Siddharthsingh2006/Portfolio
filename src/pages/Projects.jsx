import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Projects.css"; 
function Projects() {
  return (
    <Container className="py-4 projects-section">
      <h2 className="mb-4 text-center text-light">Projects</h2>

      <Row className="g-4">
        {/* Project 1 */}
        <Col md={4}>
          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <h4>Portfolio Website</h4>
              </div>
              <div className="project-card-back">
                <p>
                  A responsive personal portfolio showcasing skills, projects, and resume.
                  Built with HTML, CSS, JavaScript, and optionally React or Bootstrap.
                  Features sections like About Me, Skills, Projects, Contact, and a downloadable resume.
                </p>
                <Button
                  variant="light"
                  href="https://github.com/Siddharthsingh2006/Projects.git"
                  target="_blank"
                >
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </Col>

        {/* Project 2 */}
        <Col md={4}>
          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <h4>EventHub Platform</h4>
              </div>
              <div className="project-card-back">
                <p>
                  A web app for browsing, creating, and registering for local events.
                  Admins can manage events, view registrations, and approve/reject
                  submissions. Designed for smooth event management.
                </p>
              </div>
            </div>
          </div>
        </Col>

        {/* Project 3 - Online Voting System */}
        <Col md={4}>
          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <h4>Online Voting System</h4>
              </div>
              <div className="project-card-back">
                <p>
                  A secure and user-friendly voting platform allowing registered users to
                  cast votes online. Includes admin panel for managing candidates, results,
                  and user verification.  
                  <strong>Tech Stack:</strong> Java (Spring Boot), MySQL, HTML, CSS, Bootstrap, JavaScript.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
