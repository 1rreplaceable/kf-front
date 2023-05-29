const user_id = document.querySelector("#user_id");
const user_pw = document.querySelector("#user_pw");
const user_pwcheck = document.querySelector("#user_pwcheck");
const user_name = document.querySelector("#user_name");
const signup_btn = document.querySelector("#signupBtn");
const id_info = document.querySelector(".id_info");
const pw_info = document.querySelector(".pw_info");
signup_btn.addEventListener("click", () => {
  if (user_id.value == "") {
    alert("아이디를 입력해주세요");
  } else if (user_pw.value == "") {
    alert("비밀번호를 입력해주세요");
  } else if (user_pwcheck.value == "") {
    alert("비밀번호 확인을 입력해주세요");
  } else if (user_name.value == "") {
    alert("이름을 입력해주세요");
  } else {
    if (user_id.value == "user01") {
      id_info.innerText = "이미 존재하는 아이디입니다.";
      user_id.value = "";
      user_id.focus();
    } else if (user_id.value != "") {
      id_info.innerText = "사용가능한 아이디입니다.";
    }
    if (user_pw.value == user_pwcheck.value) {
      pw_info.innerText = "비밀번호가 일치합니다.";
    } else if (user_pw.value != "") {
      pw_info.innerText = "비밀번호가 일치하지 않습니다.";
      user_pwcheck.value = "";
      user_pwcheck.focus();
    }

    if (
      id_info.innerHTML == "사용가능한 아이디입니다." &&
      pw_info.innerHTML == "비밀번호가 일치합니다."
    ) {
      alert(`${user_name.value}님, 회원가입이 성공적으로 완료되었습니다^^`);
      user_id.value = "";
      user_pw.value = "";
      user_pwcheck.value = "";
      user_name.value = "";
      id_info.innerHTML = "";
      pw_info.innerHTML = "";
    }
  }
});
