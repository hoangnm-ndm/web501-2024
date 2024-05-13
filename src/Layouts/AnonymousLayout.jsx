import React from "react";
import { Link, Outlet } from "react-router-dom";

const AnonymousLayout = () => {
  return (
    <>
      <h1>Anonymous Layout</h1>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default AnonymousLayout;
