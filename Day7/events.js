const input1 = document.querySelector("#answer-a");
const input2 = document.querySelector("#answer-b");
const input3 = document.querySelector("#answer-c");
input1.addEventListener("change", function (e) {
  const checkbox = e.target; // 체크된 체크박스
  const listItem = checkbox.parentNode;
  // 체크여부에 따라 동작을 수행
  if (checkbox.checked) {
    // 클래스 부여
    listItem.classList.add("text-primary");
  } else {
    // 클래스 제거 css 스타일링 제거
    listItem.classList.remove("text-primary");
  }
});

input2.addEventListener("change", function (e) {
  const checkbox = e.target; // 체크된 체크박스
  const listItem = checkbox.parentNode;
  // 체크여부에 따라 동작을 수행
  if (checkbox.checked) {
    // 클래스 부여
    listItem.classList.add("text-danger");
  } else {
    // 클래스 제거 css 스타일링 제거
    listItem.classList.remove("text-danger");
  }
});

input3.addEventListener("change", function (e) {
  const checkbox = e.target; // 체크된 체크박스
  const listItem = checkbox.parentNode;
  // 체크여부에 따라 동작을 수행
  if (checkbox.checked) {
    // 클래스 부여
    listItem.classList.add("text-danger");
  } else {
    // 클래스 제거 css 스타일링 제거
    listItem.classList.remove("text-danger");
  }
});

const menuCart = [];

const resultDiv = document.querySelector("#order-list");
const menuButtons = document.querySelectorAll("#practice-3 button");

for (let i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("click", (e) => {
    const btn = e.target;
    const menuName = btn.innerText;

    menuCart.push(menuName);

    resultDiv.innerText = `[${menuCart}이 주문이 되었습니다.]`;
  });
}
