import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up your server side email logic here
    console.log(formData);
  };

  return (
    <Container className="my-5 bg-dark text-light p-4 rounded">
      <h2>Contact Me</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="contactName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-secondary text-light border-0"
          />
        </Form.Group>
        <Form.Group controlId="contactEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-secondary text-light border-0"
          />
        </Form.Group>
        <Form.Group controlId="contactMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-secondary text-light border-0"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}
