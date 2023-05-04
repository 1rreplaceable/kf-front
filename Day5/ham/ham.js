// // 함수
// // 입력O 출력O
// // 입력X 출력O
// // 입력O 출력X
// // 입력X 출력X

// /*
// 함수 : 선언부, 구현부
// 키워드 : function 함수명(입력값){
//     실행할 문장
//     return 값;
// }
// */
// // 입력O, 출력O
// // 자바스크립트에 먼저 만들어놓았다.
// // 가져다가 쓰는데 api
// const max_num = Math.max(20, 30, 45);
// console.log(max_num);

// // 지역변수, 전역변수
// // 함수 안에서 설명

// // 선언부
// function sayHi(username) {
//   console.log("안녕하세요 " + username);
//   return "그래";
// }

// // 호출 : 함수를 실제 실행하는 영역
// sayHi("이서희");
// sayHi("뽀로로");

// let a = sayHi("다다");
// console.log(a);

// // 선언부 : 숫자를 받아서 세제곱 반환
// function cube(num) {
//   return num * num * num;
// }

// const res1 = cube(3);
// console.log(res1);

// // 라면을 생성하는 자판기를 만들기
// // 입력X 출력O
// function createRamen() {
//   return "라면";
// }

// const ramen = createRamen();
// console.log(ramen);

// // 선언부 만두생성자판기
// // 재료를 넘겨서 만두를 만든다
// function createMandoo(menu) {
//   return menu + "만두";
// }

// const mandoo1 = createMandoo("고기");
// const mandoo2 = createMandoo("김치");

// console.log(mandoo1);
// console.log(mandoo2);

// function createKimbab(a, b) {
//   return a + b + "김밥";
// }
// const kimbab1 = createKimbab("참치", "멸치");
// const kimbab2 = createKimbab("스팸", "김치");

// console.log(kimbab1);
// console.log(kimbab2);

// // 반환값이 없는 함수
// // return 함수종료 or 값 반환 후 끝
// function test() {
//   console.log("반환 값 없는데?");
//   // return ;
// }
// test();

// // 스코프(scope)
// // 변수의 활동 범위

// function changeA(x) {
//   x += 3;
//   console.log(x);
// }
// changeA(10);
// //console.log(x);

// let y = 100;
// function changeB() {
//   console.log(y);
//   let msg = "hello";

//   function changeC() {
//     console.log(msg);
//     console.log(y);
//     let msg2 = "world";
//     console.log(msg2);
//   }
//   changeC();
// }
// changeB();

// function show(name = "무명", age = 0) {
//   console.log("이름: " + name + " 나이: " + age);
// }
// show("이서희", 20);
// show("이서희");

// // 함수를 변수에 담을 수 있다.
// const print = function () {
//   console.log("print");
// };
// print();
// console.log(print);

// /*
// 열차예매
// 함수명

// */
// function objection(object) {
//   if (object == "춘천") {
//     return 5000;
//   } else if (object == "부산") {
//     return 30000;
//   } else if (object == "대구") {
//     return 20000;
//   } else if (object == "수원") {
//     return 10000;
//   }
// }
// function train(trains) {
//   if (trains == "KTX") {
//     return 30000;
//   } else if (trains == "새마을") {
//     return 5000;
//   } else if (trains == "무궁화") {
//     return 3000;
//   }
// }

// let object = prompt("목적지: ");
// let trains = prompt("기차 종류: ");

// alert(objection(object) + train(trains));

let fruit = ["사과", "바나나", "애플망고"];

fruit.push("딸기");
alert(fruit.pop());
console.error(fruit.shift());

// 배열도 매개변수로 전달 될 수 있다
// 주소값을 넘긴다.
// 배열이 파라미터로 전달되는 경우 원본이 전달됨
// call by reference

function info(fruit) {
  for (fruit1 of fruit) {
    console.warn(fruit1);
  }
}
info(fruit);

// 값이 넘어 올 때 복사된 값이 넘어온다.
// call - by - value

let a3 = 10;
function show(num) {
  console.log(num);
  return num + 1;
}

show(a3);
console.error(show(a3));
console.error(a3);
