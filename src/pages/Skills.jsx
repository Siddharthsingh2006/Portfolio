import { Container, ProgressBar } from "react-bootstrap";

function Skills() {
  const skills = [
    { name: "HTML", level: 100, variant: "success" },
    { name: "CSS", level: 95, variant: "info" },
    { name: "JavaScript", level: 75, variant: "warning" },
    { name: "React JS", level: 70, variant: "primary" },
    { name: "C++", level: 80, variant: "secondary" },
    { name: "DSA", level: 65, variant: "danger" },
  ];

  return (
    <Container className="py-4" style={{ maxWidth: "700px" }}>
      <h2 className="mb-4 text-center">Skills</h2>
      {skills.map((skill, index) => (
        <div className="mb-3" key={index}>
          <label className="fw-bold mb-1">{skill.name}</label>
          <ProgressBar
            now={skill.level}
            label={`${skill.level}%`}
            variant={skill.variant}
            animated
          />
        </div>
      ))}
    </Container>
  );
}

export default Skills;
