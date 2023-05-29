const loginpage = document.querySelector(".login");
const signuppage = document.querySelector(".signup");
const signup_main = document.querySelector(".signup_main");
const login_main = document.querySelector(".login_main");

loginpage.addEventListener("click", () => {
  signup_main.classList.add("disable_form");
  login_main.classList.remove("disable_form");
  loginpage.classList.remove("black_color");
  signuppage.classList.add("black_color");
});
signuppage.addEventListener("click", () => {
  login_main.classList.add("disable_form");
  signup_main.classList.remove("disable_form");
  loginpage.classList.add("black_color");
  signuppage.classList.remove("black_color");
});
