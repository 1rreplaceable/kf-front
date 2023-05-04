// 변수
// 문자 여러개 저장 하는 방법 '', ""
// 타입 지정을 안해도 된다. 자바스크립트가 알아서 데이터 파악해서 저장
// 중복 허용 x
/*
let name1 = "이서희";
let name2 = "강동원";
console.log(name1);
console.log(name2);
const number1 = 1;
console.log(number1);

// 고정 된 상수! 변경 x
// 자바스크립트는 기본 값 저장, Object 객체
number1 = 10;
console.log(number1);
*/

// console.log(a);
// let a = 10;
// console.log(a);

// undefined : 변수는 있는데 초기화 하지 않았다.

// 호이스팅
//  - var 선언된 변수들을 미리 메모리공간에 올린다.
//  - let 대체

// var 문제
//  - 호이스팅
//  - 중복선언 초기화 가능하다.
//  - 범위 구별 없다.

// 전역변수 : 프로그램 전체적인 곳에서 사용
// 지역변수 : {} 안에 선언된 것, 함수 내부 선언
console.log(b);
var b = 10;
console.log(b);

var b = 100;
console.log(b);

{
  var c = 10000;
}
console.log(c);

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// 정수 실수 구분 x
// number

// 문자
// String

// function
