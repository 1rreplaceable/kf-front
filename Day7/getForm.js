// 선택한 옵션을 팝업창에 띄우기
// const selectMenu = document.querySelector("#major");

// function displaySelect() {
//   let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
//   // alert();
//   alert(`[${selectedText}]를 선택했습니다.`);
// }
// selectMenu.onchange = displaySelect;

const selectBtn = document.querySelector("#send");
const all = document.querySelector("#all");

selectBtn.addEventListener("click", function () {
  let selectText = document.querySelector(".textarea");
  selectText.textContent = "";
  const selectAll = document.querySelectorAll("input[name='all']:checked");
  for (let i = 0; i < selectAll.length; i++) {
    selectText.textContent += `${selectAll[i].value}  `;
  }
});
all.addEventListener("change", function (e) {
  const checkbox = e.target; // 체크된 체크박스
  const newAll = document.querySelectorAll("#new");
  if (checkbox.checked) {
    newAll.checked = true;
  } else {
    newAll.checked = false;
  }
});
