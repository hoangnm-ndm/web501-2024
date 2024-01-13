import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import HomePage from "./src/pages/HomePage";
import Navigo from "navigo";
import AboutPage from "./src/pages/AboutPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import render from "./src/utils/common";
import SignUpPage from "./src/pages/SignUpPage";

const router = new Navigo("/", { linksSelector: "a" });
//http://localhost:5173/

const app = document.getElementById("app");

router.on("/", () => {
  render(app, HomePage);
});

router.on("/about", () => {
  render(app, AboutPage);
});

router.on("/home", () => router.navigate("/"));
router.on("/signup", () => {
  render(app, SignUpPage);
});

router.notFound(() => {
  render(app, NotFoundPage);
});

router.resolve();
