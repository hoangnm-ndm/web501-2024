import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      {/* React Fragment */}
      <Header />
      <main>
        <h1>Hello ca lop!</h1>
        <p>My name is Hoang</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
