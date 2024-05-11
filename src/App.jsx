import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    // ! Cách sử dụng JSX
    <div>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
