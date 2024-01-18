const SignUpPage = () => {
  return /*html*/ `
  <form action="">
  <h1>Đăng ký</h1>
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
    <label for="confirmPass" class="form-label">Confirm Password</label>
    <input
      type="password"
      class="form-control"
      id="confirmPass"
      placeholder="your confirmPass..."
    />
  </div>
  <div class="mb-3">
    <button
      type="button"
      id="btnRegister"
      class="btn btn-primary btn-submit"
    >
      Đăng ký
    </button>
  </div>
</form>
  `;
};

export default SignUpPage;
