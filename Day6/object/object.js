// 객체 object
//  - 사용자 정의 자료형
//  - 내가 담고 싶은 변수(데이터) 묶는다.
//  - 여러가지 프로퍼티(key:value)구성 된다.

// const seohee = {
//   name1: "이서희",
//   age1: 20,
//   address: "경기도 성남시",
// };

// const jihee = {
//   name2: "이지희",
//   age2: 30,
//   address: "인천광역시",
// };

// console.log(seohee);
// console.log(jihee);

const ramen = {
  name1: "뽀글이",
  price: 3500,
};

const chicken = {
  name1: "슈넬치킨",
  price: 5500,
};

const coke = {
  name1: "코카콜라",
  price: 1500,
};

const americano = {
  name1: "아메리카노",
  price: 3500,
};

console.log("=====메뉴판=====");
console.log(ramen);
console.log(chicken);
console.log(coke);
console.log(americano);

//console.clear();
// object를 생성하면 주소값
// const 변수를 이용해서 주소값을 변경 못하게 고정 시킨다.
// 프로퍼티 다루기(읽기, 쓰기)
// . 닷연산: 객체의 키를 통해 값을 가져옴
// [] 대괄호 연산: 객체의 키를 조작하여 값을 가지고 올 수 있다.

// 가격 변경
ramen.price += 1000;
chicken.price += 1000;
coke.price += 1000;
americano.price += 1000;

// [] 이용시 문자열 key
ramen["price"] += 1000;
chicken["price"] += 1000;
coke["price"] += 1000;
americano["price"] += 1000;

console.log("=====메뉴판=====");
console.log(ramen);
console.log(chicken);
console.log(coke);
console.log(americano);

const cookie1 = {
  cookie_name: "천사맛쿠키",
  cookie_level: 10,
  cookie_grade: "S",
  cookie_skill: ["악령퇴치", "소생"],
};

for (let i in cookie1) {
  console.error(i);
  console.warn(cookie1[i]);
}

// 객체 배열 생성 및 순회
// 당연히 객체도 배열에 저장 될 수 있다.
// for, for each, for of

const arr = [
  { name1: "강아지", age: 2 },
  { name1: "고양이", age: 1 },
  { name1: "도마뱀", age: 1 },
  { name1: "토끼", age: 2 },
];
console.clear();
console.log(arr);

for (let i in arr) {
  console.log(arr[i].name1);
  console.log(arr[i].age);
}
for (let item of arr) {
  console.error(item);
}
console.clear();

const person = [
  {
    id: "aaaaa",
    name: "박신우",
    password: "aa",
    email: "aaa@aaa.aaa",
    gender: "F",
    age: 33,
  },
  {
    id: "bbbbb",
    name: "강고결",
    password: "bb",
    email: "bbb@bbb.bbb",
    gender: "M",
    age: 34,
  },
  {
    id: "ccccc",
    name: "남나눔",
    password: "cc",
    email: "ccc@ccc.ccc",
    gender: "M",
    age: 28,
  },
  {
    id: "ddddd",
    name: "도대담",
    password: "dd",
    email: "ddd@ddd.ddd",
    gender: "M",
    age: 35,
  },
  {
    id: "eeeee",
    name: "류라라",
    password: "ee",
    email: "eee@eee.eee",
    gender: "F",
    age: 17,
  },
  {
    id: "fffff",
    name: "문미미",
    password: "ff",
    email: "fff@fff.fff",
    gender: "F",
    age: 20,
  },
  {
    id: "ggggg",
    name: "박보배",
    password: "gg",
    email: "ggg@ggg.ggg",
    gender: "M",
    age: 26,
  },
  {
    id: "hhhhh",
    name: "송성실",
    password: "hh",
    email: "hhh@hhh.hhh",
    gender: "M",
    age: 41,
  },
  {
    id: "iiiii",
    name: "윤예의",
    password: "ii",
    email: "iii@iii.iii",
    gender: "F",
    age: 28,
  },
  {
    id: "jjjjj",
    name: "정재주",
    password: "jj",
    email: "jjj@jjj.jjj",
    gender: "M",
    age: 23,
  },
];

for (let i in person) {
  console.log(person[i]);
}
console.clear();
// 자바스크립트는 자바와 다르게
// 객체를 생성하고 나서 멤버변수를 추가할 수 있다.
// 추가하는 방법
const user1 = {
  id: "love",
  pw: "love",
};

// 프로그램이 실행 중
console.log(user1);

// 중간에 추가가 된다.
user1["nickname"] = "empress";

// 삭제 delete 객체명.필드명
delete user1.nickname;

console.log(user1);
// 변수명['key'] = 값;
// 중간에 변수를 추가하는 것은 좋으나 나중에
// 유지 보수가 많이 힘들다.

// 자바스크립트에서 객체를 생성하는 방법은 두가지

const person5 = new Person("송성실", 41);
console.log(person5);
// 생성자 object
// constructor function
function Person(name1, age) {
  // 객체 생성할 때 각각 this
  this.name1 = name1;
  this.age = age;
}

/*
생성자 함수를 이용해서 객체를 저장
배열에 저장해서 출력 (함수를 이용해서 객체를 출력)
학생들 배열
실제 학생 name, subject, score
생성자 함수를 이용해서 저장하고 출력
*/
const stu1 = new Student("김길동", "자바", 100);
const stu2 = new Student("박길동", "디비", 50);
const stu3 = new Student("이길동", "화면", 85);
const stu4 = new Student("정길동", "서버", 60);
const stu5 = new Student("홍길동", "서버", 20);
function Student(name1, subject, score) {
  // 객체 생성할 때 각각 this
  this.name1 = name1;
  this.subject = subject;
  this.score = score;
}
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "name";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "subject";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "score";
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

let row_2 = document.createElement("tr");
let row_2_data_1 = document.createElement("td");
row_2_data_1.innerHTML = stu1.name1;
let row_2_data_2 = document.createElement("td");
row_2_data_2.innerHTML = stu1.subject;
let row_2_data_3 = document.createElement("td");
row_2_data_3.innerHTML = stu1.score;
row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);
