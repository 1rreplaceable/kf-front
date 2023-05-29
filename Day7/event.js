const inputString = document.querySelector("#inputString");
const checkLength = document.querySelector(".checkLength");
const answer = document.querySelector(".answer");

checkLength.addEventListener("mouseover", () => {
  answer.innerHTML = `${inputString.value.length}`;
});
checkLength.addEventListener("mouseout", () => {
  answer.innerHTML = "";
});
