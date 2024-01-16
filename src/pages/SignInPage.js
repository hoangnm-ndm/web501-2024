const SignInPage = () => {
  return /*html*/ ` 
  <form action="">
    <h1>Please Login</h1>
    <div class="mb-3">
      <label for="username" class="form-label">Username</label>
      <input
        type="text"
        class="form-control"
        id="username"
        placeholder="your username..."
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
  </form>`;
};

export default SignInPage;
