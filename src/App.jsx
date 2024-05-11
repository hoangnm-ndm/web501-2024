import React from "react";
import "./App.css";

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
    <div className="infor">
      <ul className="list">
        <li className="item">item1</li>
        <li className="item">item2</li>
        <li className="item">item3</li>
      </ul>
    </div>
  );
}

export default App;
