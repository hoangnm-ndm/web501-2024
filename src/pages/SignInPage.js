import Footer from "../components/Footer";

const SignInPage = () => {
  return /*html*/ ` 
  <form action="">
    <h1>Please Login</h1>
    <div class="mb-3">
      <label for="email" class="form-label">Your mail:</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="your email..."
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="your password..."
      />
    </div>

    <div class="mb-3">
      <button
        type="button"
        id="btnSignIn"
        class="btn btn-primary btn-submit"
      >
        Đăng nhập
      </button>
    </div>
  </form>
  ${Footer()}
  `;
};

export default SignInPage;
