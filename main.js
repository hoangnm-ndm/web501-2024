import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap.js";
import handleProductList from "./src/handles/handleProductList";
import handleSubmitRegister from "./src/handles/handleRegister";
import { AboutPage } from "./src/pages/AboutPage";
import { HomePage } from "./src/pages/HomePage";
import { NotFoundPage } from "./src/pages/NotFoundPage";
import SignUp from "./src/pages/SignUp";
import { render, router } from "./src/utils/common";
import "./style.css";

const app = document.getElementById("app");

router.on("/", () => render(app, HomePage), {
  after() {
    handleProductList();
  },
});
router.on("/home", () => router.navigate("/"));
router.on("/register", () => render(app, SignUp), {
  after() {
    handleSubmitRegister();
  },
});
router.on("/about", () => render(app, AboutPage));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
