import "./style.css";
import Navigo from "navigo";

const router = new Navigo("/", {
  linksSelector: "a",
});
const app = document.getElementById("app");
const HomePage = () => {
  return `
  <h2>HomePage</h2>
  `;
};

const AboutPage = () => {
  return `
  <h2>AboutPage</h2>
  `;
};

const render = (target, content) => {
  target.innerHTML = content();
};

router.on("/home", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.resolve();
