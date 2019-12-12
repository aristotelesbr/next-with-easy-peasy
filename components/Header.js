import React from "react";

// import { Container } from './styles';

const Header = ({ currentUser }) => {
  return (
    <>
      <h1>Header</h1>
      <p>Bem vindo! {currentUser}</p>
    </>
  );
};
export default Header;
