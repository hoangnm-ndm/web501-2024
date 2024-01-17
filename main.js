import { AboutPage } from "./src/pages/AboutPage";
import { HomePage } from "./src/pages/HomePage";
import { NotFoundPage } from "./src/pages/NotFoundPage";
import { render } from "./src/utils/common";
import "./node_modules/bootstrap/dist/js/bootstrap.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Navigo from "navigo";
import SignUp from "./src/pages/SignUp";
import register from "./src/components/Register";
import SignIn from "./src/pages/SignIn";
import login from "./src/components/login";

const router = new Navigo("/", {
  linksSelector: "a",
});
const app = document.getElementById("app");

router.on("/home", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.on("/signup", () => render(app, SignUp), {
  after: () => {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.onclick = register;
  },
});

router.on("/signin", () => render(app, SignIn), {
  after: () => {
    const btnSignIn = document.getElementById("btnSignIn");
    btnSignIn.onclick = login;
  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();
