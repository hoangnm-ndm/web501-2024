const userInfor = {
  username: "hoangnm62",
  major: "developer",
  company: "FPT software",
  email: "hoang@gmail.com",
};

// const username = userInfor.username;
// const major = userInfor.major;
// const company = userInfor.company;
// const email = userInfor.email;

const { username, major, email } = userInfor;

console.log(username);

const myAccountBank = [1000000000, 20000, 30000];

const [acc1, ...rest] = myAccountBank;

console.log(rest);
