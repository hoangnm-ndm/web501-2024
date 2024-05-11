import React from "react";

function Login() {
  return (
    <form action="">
      <h1 className="">Login</h1>
      <div className="mb-3">
        <label htmlFor="username">Username:</label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="username">Password:</label>
        <input type="password" className="form-control" />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary w-100">Login</button>
      </div>
    </form>
  );
}

export default Login;
