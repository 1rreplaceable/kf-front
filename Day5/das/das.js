console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation
console.log(100 + 200 / 50);
console.log(500 / (200 - 150));
console.log(500 + 2 + "3");
console.log("3" + 500 + 2);

console.log("my" + "cart");
console.log("1" + 2);

let counter = 1;
const count = ++counter;
console.log(count);

const count2 = counter++;
console.log(count);

let a = 1;

a += 2;
console.log(a);

// == 값만 비교
// === 값과 자료형 같이 비교
console.log(10 < 10);
console.log(10 == 10);
console.log("10" == 10);
console.log("10" === 10);

// and && or || not !

// 객체 만들어서 비교
// Object 선언하면 각각의 객체 생성
// 각각 다른 주소값을 갖게 된다.
const a2 = { name1: "서희" };
const a3 = a2;
const a4 = { name1: "서희" };
console.log(a2.name1);
console.log(a2 == a3);
console.log(a2 == a4);

// 삼항연산자 ?
console.log("이서희" === "이서희" ? "yes" : "no");
