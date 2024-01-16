export const registerValid = (user) => {
  // Kiem tra du lieu:
  if (!user.username || !user.password || !user.confirmPass) {
    alert("khong duoc bo trong!");
    return false;
  }

  if (user.password.length < 6) {
    alert("Password phai dai hon 6 ky tu!");
    return false;
  }

  if (user.password !== user.confirmPass) {
    alert("Mat khau nhap lai khong khop!");
    return false;
  }
  return true;
};
