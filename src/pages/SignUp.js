const SignUp = () => {
  return `
  <form action="">
    <h1>Đăng ký</h1>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" />
    </div>

    <div class="mb-3">
      <label for="confirmPass" class="form-label">Confirm password</label>
      <input type="password" class="form-control" id="confirmPass" />
    </div>

    <button type="button" id="btnRegister" class="btn btn-primary w-100">
      Đăng ký
    </button>

    <div>Bạn đã có tài khoản? <a href="/login">Đăng nhập</a> ngay</div>
  </form>
  `;
};

export default SignUp;
