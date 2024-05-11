import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Example from "./components/Example";

function App() {
  return (
    <>
      {/* {Header()} */}
      <Header />
      <Example />
      <main>
        Noi dung trang main
        <button className="btn btn-primary">Click me</button>
        <button className="btn btn-danger">Nut Xoa san pham</button>
      </main>
      <Footer />
    </>
  );
}

export default App;
