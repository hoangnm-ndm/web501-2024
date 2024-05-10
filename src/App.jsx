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
        <p>Noi dung trang web</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
