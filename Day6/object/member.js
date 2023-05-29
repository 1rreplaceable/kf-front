function dis() {
  const signup = document.getElementById("signup_form");
  const btn_signup = document.getElementById("signup");
  btn_signup.addEventListener("click", () => {
    if (signup.style.display == "none") {
      signup.style.display = "block";
    } else {
      signup.style.display = "none";
    }
  });
}
dis();
