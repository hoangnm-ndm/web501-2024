import "./style.css";
import HomePage from "./src/pages/HomePage";
import Navigo from "navigo";
import AboutPage from "./src/pages/AboutPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import render from "./src/utils/common";
import SignUpPage from "./src/pages/SignUpPage";
import register from "./src/components/Register";
import SignInPage from "./src/pages/SignInPage";
import signIn from "./src/components/SignIn";

const router = new Navigo("/", { linksSelector: "a" });

const app = document.getElementById("app");

router.on("/", () => render(app, HomePage));

router.on("/about", () => render(app, AboutPage));

router.on("/home", () => router.navigate("/"));
router.on("/signup", () => render(app, SignUpPage), {
  after: () => {
    const btnRegister = document.getElementById("btnRegister");
    btnRegister.onclick = register;
  },
});

router.on("/signin", () => render(app, SignInPage), {
  after: () => {
    const btnSignIn = document.getElementById("btnSignIn");
    btnSignIn.onclick = signIn;
  },
});

router.notFound(() => render(app, NotFoundPage));

router.resolve();
