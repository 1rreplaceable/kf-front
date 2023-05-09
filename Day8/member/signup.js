class Member {
  name;
  id;
  pw;
  phnum;
  constructor(name, id, pw, phnum) {
    this.name = name;
    this.id = id;
    this.pw = pw;
    this.phnum = phnum;
  }
  toString() {
    return this.name + this.id + this.pw + this.phnum;
  }
}

const member = [];

const newmem_name = document.querySelector("#signup_name");
const newmem_id = document.querySelector("#signup_id");
const newmem_pw = document.querySelector("#signup_pw");
const newmem_phnum = document.querySelector("#signup_phnum");
const signup_btn = document.querySelector("#signup_btn");

const login_id = document.querySelector("#login_id");
const login_pw = document.querySelector("#login_pw");
const login_btn = document.querySelector("#login_btn");

signup_btn.addEventListener("click", () => {
  const name_value = newmem_name.value;
  const id_value = newmem_id.value;
  const pw_value = newmem_pw.value;
  const phnum_value = newmem_phnum.value;
  if (
    name_value == "" ||
    id_value == "" ||
    pw_value == "" ||
    phnum_value == ""
  ) {
    alert("모든 항목 기입");
  } else {
    let m1 = new Member(name_value, id_value, pw_value, phnum_value);
    member.push(m1);
    for (let i = 0; i < member.length; i++) {
      alert(`${member[i].name}님 회원가입이 완료되었습니다.`);
      location.href = "login.html";
    }
  }
});

// login_btn.addEventListener("click", () => {
//   const id = login_id.value;
//   const pw = login_pw.value;
//   for (let i = 0; i < member.length; i++) {
//     if (member[i].id == id) {
//       if (member[i].pw == pw) {
//         alert("로그인 성공!");
//       } else {
//         alert("비밀번호 x");
//       }
//     }
//   }
// });
