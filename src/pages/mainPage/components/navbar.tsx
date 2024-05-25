import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { LoginButton } from './loginButton';

export default () => {
  return(
    <Navbar className="m-5 navbar">
      <Container className="d-flex justify-content-end">
        <LoginButton/>
      </Container>
    </Navbar>
  )
}
