// 팝업창에 입력을 할 수 있는 창이 뜬다.
// prompt(메시지, 입력창에 보여지는 메시지)
// let number = prompt("숫자입력:", 0);
// alert(number);

// let str = prompt("아무 문자나 입력");
// alert(str);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("찾는다.");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("발사");

// continue
//  - 반복 흐름을 강제로 다음으로 넘긴다.
// 369 게임
// 숫자에 3 6 9가 들어가면 "짝!" 출력

// for (let i = 1; i <= 15; i++) {
//   if (i % 10 == 3 || i % 10 == 6 || i % 10 == 9) {
//     console.log("짝!");
//   } else {
//     console.log(i);
//   }
// }

// let answer = 6;
// while (true) {
//   let my = prompt("숫자 입력: ");
//   if (my < answer) {
//     alert("up");
//   } else if (my > answer) {
//     alert("down!");
//   } else if (my == answer) {
//     alert("정답!");
//     break;
//   } else if (my == "p") {
//     alert("종료");
//     break;
//   }
// }

let my_page = prompt("즐겨 사용하는 사이트: ");

switch (my_page) {
  case "naver":
    location.href = "https://www.naver.com/";
    break;
  case "google":
    location.href = "https://www.google.com/";
    break;
}
