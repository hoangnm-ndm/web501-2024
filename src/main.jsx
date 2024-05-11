import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const app = document.getElementById("root");
// const vitualDOM = ReactDOM.createRoot(app);
// vitualDOM.render(<h1>Hello</h1>);
