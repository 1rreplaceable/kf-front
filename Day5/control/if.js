// 출력 log
// 계절 찾기
// 월을 저장하고 봄 3,4,5 여름 6,7,8 가을 9,10,11 겨울 12,1,2

let month = 2;

switch (month) {
  case (3, 4, 5): {
    console.log("봄");
    break;
  }
  case (6, 7, 8): {
    console.log("여름");
    break;
  }
  case (9, 10, 11): {
    console.log("가을");
    break;
  }
  case (12, 1, 2): {
    console.log("겨울");
    break;
  }
}

console.log(7 !== 3);
console.log(5 === "5");
console.log(!(2 <= 5));
console.log(56 % 8 === 0);
/* 결과를 옆에 적어보세요!
7 !== 3         true
5 === “5”       false
!(2 <= 5)       false
56 % 8 === 0    true
*/

let age = 18;
let price;
if (age > 18) {
  price = 1200;
} else if (age > 12) {
  price = 720;
} else {
  price = 450;
}
console.log(price);

let grade;

let face = 70;
let talk = 75;
let money = 90;

if (face >= 90 && talk >= 90 && money >= 90) {
  grade = "S";
} else if (money >= 90 && face + talk >= 160) {
  grade = "A";
} else if (!(face < 90 && talk < 90 && money < 90)) {
  grade = "B";
} else {
  grade = "C";
}
console.log(grade);
