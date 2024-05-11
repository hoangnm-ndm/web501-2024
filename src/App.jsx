import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    // document.createElement("div")

    // ! Cach viet thong thuong
    // React.createElement(
    //   "div",
    //   { className: "infor" },
    //   React.createElement(
    //     "ul",
    //     { className: "list" },
    //     React.createElement("li", { className: "item" }, "item1"),
    //     React.createElement("li", { className: "item" }, "item2"),
    //     React.createElement("li", { className: "item" }, "item3")
    //   )
    // )

    // ! Cach 2: viet = JSX (Javascript XML)
    <>
      {/* {Header()} */}
      <Header />
      <main>Noi dung trang main</main>
      <Footer />
    </>
  );
}

export default App;
