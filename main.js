import { HomePage } from "./src/pages/HomePage";
import "./node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Navigo from "navigo";
import AboutPage from "./src/pages/AboutPage";

const router = new Navigo("/"); //http://localhost:5173/

const app = document.getElementById("app");

const render = (position, content) => {
  position.innerHTML = content();
};
router.on("/", () => {
  render(app, HomePage);
});

router.on("/about", () => {
  render(app, AboutPage);
});

router.resolve();
