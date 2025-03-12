import React from 'react';
import Container from 'react-bootstrap/Container';

export default function About() {
  return (
    <Container className="my-5 bg-dark text-light p-4 rounded">
      <h2>About Me</h2>
      <p>
        I'm a passionate developer with expertise in React, Node.js, and many other modern technologies.
        My skills include JavaScript, CSS, responsive design, and more.
      </p>
      {/* Add further details as needed */}
    </Container>
  );
}
