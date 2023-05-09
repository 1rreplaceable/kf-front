const login_btn = document.querySelector("#login_btn");
const login_id = document.querySelector("#login_id");
const login_pw = document.querySelector("#login_pw");
login_btn.addEventListener("click", () => {
  if (login_id.value == "user1") {
    if (login_pw.value == "1111") {
      alert("로그인 성공");
      location.href = "manage.html";
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  }
});
