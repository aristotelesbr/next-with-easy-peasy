import React from "react";

// import { Container } from './styles';

const Footer = ({ currentUser }) => {
  return (
    <>
      <h1>Footer</h1>
      <p>Você está logado como {currentUser}</p>
    </>
  );
};

export default Footer;
