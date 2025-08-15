import { Container, Row, Col } from "react-bootstrap";
import "./Education.css";

function Education() {
  const educationData = [
    {
      title: "Class 10th",
      front: "10th Grade",
      back: [
        "School: Bonanza Convent Higher Secondary School",
        "Year: 2021",
        "Grade: A"
      ]
    },
    {
      title: "Class 12th",
      front: "12th Grade",
      back: [
        "School: Bonanza Convent Higher Secondary School",
        "Year: 2023",
        "Grade: A"
      ]
    },
    {
      title: "Bachelor’s Degree",
      front: "B.Sc. Degree",
      back: [
        "College: Modern College of Arts, Science and Commerce",
        "Passing Year: 2026",
        "Grade: A+"
      ]
    }
  ];

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center text-primary">Education</h2>
      <Row className="g-4 justify-content-center">
        {educationData.map((item, index) => (
          <Col md={4} key={index} className="education-card">
            <div className="education-card-inner">
              <div className="education-card-front">
                {item.front}
              </div>
              <div className="education-card-back">
                {item.back.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Education;
