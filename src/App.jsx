import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import Login2 from "./pages/Login2";

function App() {
  return (
    // ! Cách sử dụng JSX
    <div>
      <Header />
      <main>
        <Login />
        <Login2 />
        <About />
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>

        <button type="button" className="btn btn-link">
          Link
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
