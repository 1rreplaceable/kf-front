// document 객체 둘러보기
// 웹프로그램이 실행하면서 자바스크립트에 문서객체 생성
console.log(document);
console.log(document.title);
console.log(document.URL);

// 웹페이지 title 변경
document.title = "동적 웹페이지 만들기";

// 문서 가지고 와서 h1 변경
const h1 = document.querySelector("#heading");
console.warn(h1);

const h2 = document.getElementById("heading");
h2.innerText = "진짜 변경";

//  버튼을 클릭하면 팝업창
//  1) DOM 객체 가져오기
//  2) 감시를 시작
//  3) 처리를한다.
const orderBtn = document.querySelector("#order-bell");
orderBtn.addEventListener("click", () => {
  alert("띵동!");
});
