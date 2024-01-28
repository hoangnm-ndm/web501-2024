import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap.js";
import Dashboard from "./src/admin/Dashboard";
import handleLogin from "./src/handles/handleLogin";
import handleProductList from "./src/handles/handleProductList";
import handleSubmitRegister from "./src/handles/handleRegister";
import { AboutPage } from "./src/pages/AboutPage";
import { HomePage } from "./src/pages/HomePage";
import { NotFoundPage } from "./src/pages/NotFoundPage";
import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";
import { render, router } from "./src/utils/common";
import "./style.css";

const app = document.getElementById("app");

const user = JSON.parse(sessionStorage.getItem("user"));

router.on("/", () => render(app, HomePage), {
  after() {
    handleProductList();
  },
});

router.on("/admin", () => render(app, Dashboard), {
  before(done) {
    // logic checkpermission
    if (user?.user?.role === "admin") {
      done();
    } else {
      alert("Bạn không có quyền truy cập vào trang này!");
      window.location.href = "/";
    }
  },
});

router.on("/logout", () => {
  sessionStorage.removeItem("user");
  const confirmValue = confirm("Đăng xuất thành công, về trang chủ?");
  if (confirmValue) {
    window.location.href = "/";
  } else {
    window.location.href = "/login";
  }
});
router.on("/home", () => router.navigate("/"));
router.on("/register", () => render(app, SignUp), {
  after() {
    handleSubmitRegister();
  },
});

router.on("/login", () => render(app, SignIn), {
  after() {
    handleLogin();
  },
});
router.on("/about", () => render(app, AboutPage));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
