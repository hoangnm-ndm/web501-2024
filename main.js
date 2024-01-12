import { AboutPage } from "./src/pages/AboutPage";
import { HomePage } from "./src/pages/HomePage";
import { NotFoundPage } from "./src/pages/NotFoundPage";
import { render } from "./src/utils/common";
import "./node_modules/bootstrap/dist/js/bootstrap.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Navigo from "navigo";

const router = new Navigo("/", {
  linksSelector: "a",
});
const app = document.getElementById("app");

router.on("/home", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
