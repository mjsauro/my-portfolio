import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-light">
      <h1 className="mb-3">Welcome to My Portfolio</h1>
      <p className="lead text-center">
        Hi, I'm [Your Name]. I'm a full stack developer specializing in modern technologies.
      </p>
    </Container>
  );
}
