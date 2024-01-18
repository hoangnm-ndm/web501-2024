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
import ContactPage from "./src/pages/ContactPage";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.getElementById("app");

router.on("/", () => render(app, HomePage), {
  after: () => {
    const productList = document.getElementById("productList");
    console.log(productList);
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        productList.innerHTML = `
          ${data
            .map((product) => {
              return `
            <div>${product.title}</div>
            <div>${product.price}</div>
            <div>${product.description}</div>
            <img src="${product.thumbnail}" alt="${product.title}" />
            `;
            })
            .join("")}
          `;
      });
  },
});
router.on("/about", () => render(app, AboutPage));
router.on("/contact", () => render(app, ContactPage));
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
