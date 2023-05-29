const result = document.querySelector("#result");
const result_btn = document.querySelector("#result_btn");
const what_value = document.querySelector("#what");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

result_btn.addEventListener("click", () => {
  if (what_value.value == "plus") {
    result.innerText = Number(num1.value) + Number(num2.value);
  } else if (what_value.value == "min") {
    result.innerText = Number(num1.value) - Number(num2.value);
  } else if (what_value.value == "mul") {
    result.innerText = Number(num1.value) * Number(num2.value);
  } else if (what_value.value == "div") {
    if ((num2.value = "0")) {
      result.innerText = "연산불가";
    } else {
      result.innerText = Number(num1.value) / Number(num2.value);
    }
  } else {
    if ((num2.value = "0")) {
      result.innerText = "연산불가";
    } else {
      result.innerText = Number(num1.value) % Number(num2.value);
    }
  }
});
