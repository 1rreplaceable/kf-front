// 클래스
//  - 객체를 만들기 위한 설계도
//  - 객체를 찍어내는 틀

// 클래스
//  데이터(저장해야되는 것)
//  메서드(기능)

// 키워드 class
//  캡슐화
//  - 클래스와 관련된 것들을 하나로 묶어서 관리
//  - 정보를 은닉
class Hero {
  // firelds(상태)
  name;
  level;
  hp;

  // methods(동작)
  attack() {}
  move() {}
  spell() {}
}

// 동물을 저장하는 클래스
// 상태 : 이름name, 품종breed, 나이age
// 동작 : 짖기bark, 앉기sit, 엎드리기liedown

class Animal {
  name;
  breed;
  age;
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
  bark() {
    console.log(this.name + "가 짖는다.");
  }
  sit() {
    console.log(this.name + "가 앉는다.");
  }
  liedown() {
    console.log(this.name + "가 엎드린다.");
  }
}
const d1 = new Animal("에이", "푸들", 4);
const d2 = new Animal("비", "말티즈", 2);
const d3 = new Animal("씨", "포메라니안", 3);
const d4 = new Animal("디", "진돗개", 1);

console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);

// 객체 값 읽고 쓰기
// . , []

d1.age += 1;
d2.age += 1;
d3.age += 1;
d4.age += 1;

console.warn(d1);
console.warn(d2);
console.warn(d3);
console.warn(d4);
d1.bark();

// 상속이 된다. extends
// 오버라이딩 : 재정의
class Cat extends Animal {
  bark() {
    console.error("야옹");
  }
}

const cat1 = new Cat();
console.log(cat1);
cat1.bark();

// instanceof()
// 왼쪽에 있는 객체가 오른쪽에 있는 클래스의
// 인스턴스인지 확인

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log("drawing" + this.color + "color");
  }

  getArea() {
    return this.width * this.height;
  }
}

// 상속 extends
class Rectangle extends Shape {}
class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }

  // 필드 출력 object 오버라이딩
  toString() {
    return this.width + "너비다!";
  }
}
console.clear();
const rect = new Rectangle(20, 20, "pink");
rect.draw();
let res = rect.getArea();

const tria = new Triangle(30, 30, "red");
console.error(tria);
let res2 = tria.getArea();

console.log(res);
console.log(res2);

console.error(tria instanceof Rectangle);
console.error(rect instanceof Rectangle);
console.error(rect instanceof Shape);
console.error(rect instanceof Object);

// 클래스배열

class Person {
  name;
  age;
  height;
  weight;
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
}

class Student extends Person {
  grade;
  major;
  constructor(name, age, height, weight, grade, major) {
    super();
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.grade = grade;
    this.major = major;
  }
  toString() {
    return (
      this.name + this.age + this.height + this.weight + this.grade + this.major
    );
  }
}

class Employee extends Person {
  salary;
  dept;
  constructor(name, age, height, weight, salary, dept) {
    super();
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.salary = salary;
    this.dept = dept;
  }
  toString() {
    return (
      this.name + this.age + this.height + this.weight + this.salary + this.dept
    );
  }
}

const s1 = new Student("강건강", 20, 178.2, 70.0, 1, "정보시스템공학과");
const s2 = new Student("남나눔", 21, 187.3, 80.0, 2, "경영학과");
const s3 = new Student("류라라", 23, 167.0, 45.0, 4, "정보통신공학과");

const e1 = new Employee("박보배", 26, 180.3, 72.0, 100000000, "영업부");
const e2 = new Employee("송성실", 38, 182.0, 76.0, 200000000, "기획부");

const person = [s1, s2, s3, e1, e2];
console.log(person);
