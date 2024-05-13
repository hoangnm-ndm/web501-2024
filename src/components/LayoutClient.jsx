import React from "react";
import Header from "./Header";

const LayoutClient = ({ children }) => {
  return (
    <>
      <header>Layout Client</header>
      <main>{children}</main>
      <footer>Layout Client</footer>
    </>
  );
};

export default LayoutClient;
