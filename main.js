import { datas as dulieu, HomePage, HomePage2 } from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import "./node_modules/bootstrap/dist/js/bootstrap";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const app = document.getElementById("app");

app.innerHTML = HomePage();

console.log(dulieu);
