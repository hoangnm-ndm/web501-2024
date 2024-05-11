import React from "react";
import "./App.css";

function App() {
  return (
    // ! Cách sử dụng JSX
    <div>
      <header>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="infor">{/* Gioi thieu ban than */}</div>
      </main>
      <footer>Copyright by hoangnm62</footer>
    </div>

    // ! Cách không sử dụng JSX:
    // React.createElement(
    //   "div",
    //   { className: "title" },
    //   React.createElement(
    //     "ul",
    //     { className: "list" },
    //     React.createElement("li", { className: "item" }, "item1"),
    //     React.createElement("li", { className: "item" }, "item2"),
    //     React.createElement("li", { className: "item" }, "item3")
    //   )
    // )
    // ! document.createElement("div")
  );
}

export default App;
