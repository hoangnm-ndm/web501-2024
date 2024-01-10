function muaLaptop(tien) {
  if (tien >= 20000000) {
    console.log("mua laptop!");
  } else {
    console.log("khong du tien!");
  }
}

function muaNha(tien) {
  if (tien >= 2000000000) {
    console.log("mua nha!");
  } else {
    console.log("khong du tien!");
  }
}
function lamThemKiemTien(callback) {
  console.log("Di lam!");
  setTimeout(() => {
    console.log("Den ngay nhan luong");
    let soTien = 20000000;
    callback(soTien);
  }, 3000);
}

console.log(lamThemKiemTien(muaNha));
