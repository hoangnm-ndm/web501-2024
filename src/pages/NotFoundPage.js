import Footer from "../components/Footer";

const NotFoundPage = () => {
  return `
  <h1>404</h1>
  <h2>Not Found!</h2>
  <a href="/" class="btn btn-primary">Back to Home</a>
  ${Footer()}
  `;
};

export default NotFoundPage;
