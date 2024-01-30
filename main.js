import register from "./src/components/Register";
import signIn from "./src/components/SignIn";
import handleProductList from "./src/components/handleProductList";
import AboutPage from "./src/pages/AboutPage";
import IndexAdmin from "./src/pages/Admin/IndexAdmin";
import ContactPage from "./src/pages/ContactPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoundPage";
import SignInPage from "./src/pages/SignInPage";
import SignUpPage from "./src/pages/SignUpPage";
import { render, router } from "./src/utils/common";
import "./style.css";

const app = document.getElementById("app");

router.on("/", () => render(app, HomePage), {
  after() {
    handleProductList();
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
router.on("/admin", () => render(app, IndexAdmin), {
  before(done) {
    console.log("before");
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user?.user?.role === "admin") {
      done();
    } else {
      alert("Bạn không có quyền truy cập vào trang này?");
      window.location.href = "/";
    }
  },
  after() {
    console.log("after");
  },
});

router.on("/logout", () => {
  sessionStorage.removeItem("user");
  router.navigate("/");
});

router.notFound(() => render(app, NotFoundPage));
router.resolve();
