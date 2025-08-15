import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button, Alert, Container } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
    if (!formData.user_email) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    emailjs
      .send(
        "service_2g1f57y",
        "template_iwvtl5k", 
        formData,
        "2McgN4dfiQvBpZnxl"
      )
      .then(() => {
        setSuccessMsg("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
        setErrors({});
      })
      .catch(() => {
        setSuccessMsg("❌ Failed to send message. Try again later.");
      });
  };

  return (
    <Container className="py-4" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">Contact Me</h2>

      {successMsg && (
        <Alert variant={successMsg.startsWith("❌") ? "danger" : "success"}>
          {successMsg}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            isInvalid={!!errors.user_name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.user_name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            isInvalid={!!errors.user_email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.user_email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
