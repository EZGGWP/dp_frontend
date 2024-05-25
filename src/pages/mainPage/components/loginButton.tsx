import React from 'react';
import { Button } from 'react-bootstrap';

export const LoginButton = () => {
  const sayHello = () => {
    alert('Hello!')
  };

  return (
    <Button onClick={sayHello}>Login</Button>
  );
}
