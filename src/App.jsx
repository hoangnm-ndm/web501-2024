import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Register from "./pages/Register";

function App() {
  return (
    <>
      {/* React Fragment */}
      {/* <Header />
      <main>
        <p>Noi dung trang web</p>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
      <Footer /> */}
      <Register />
    </>
  );
}

export default App;
