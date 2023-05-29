const find_id_name = document.querySelector("#find_id_name");
const find_id_phnum = document.querySelector("#find_id_phnum");
const find_pw_id = document.querySelector("#find_pw_id");
const find_pw_phnum = document.querySelector("#find_pw_phnum");

const find_id_btn = document.querySelector("#find_id_btn");
const find_pw_btn = document.querySelector("#find_pw_btn");

find_id_name.addEventListener("click", () => {
  find_id_name.value = "";
});
find_id_phnum.addEventListener("click", () => {
  find_id_phnum.value = "";
});
find_pw_id.addEventListener("click", () => {
  find_pw_id.value = "";
});
find_pw_phnum.addEventListener("click", () => {
  find_pw_phnum.value = "";
});

find_id_btn.addEventListener("click", () => {
  alert("id는user1입니다");
});
find_pw_btn.addEventListener("click", () => {
  alert("pw는1111입니다");
});
