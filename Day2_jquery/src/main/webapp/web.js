/**
 * 
 
 html5에서 간단하게 웹에 저장을 할 수있는 공간
 웹 스토리지 
 

 */
 // setItem()
 localStorage.setItem('name','seokjin');
 localStorage.setItem('age','26');
 
 const value = localStorage.getItem('name');
 
 //document.write(value);
 
 // 객체를 저장한다.
 // 객체를 만들어도 안에 숫자값이 있으면 에러!
 // 객체를 문자열 자체로 변경
 // 웹 통신 할 때 JSON 파일
 const obj={
	name : '최석진',
	age : 26
}

const arr = [1,2,3];

// 객체를 JSON 문자열로 변환 .stringify(변수)
const objString = JSON.stringify(obj);
const arrString = JSON.stringify(arr);

// 문자열로 변환한 데이터를 스토리에 저장
localStorage.setItem("person",objString);
localStorage.setItem("array",arrString);

// 웹스토리지에 데이터 꺼내온 데이터를 -> 원래 자료형으로 변경
let personObj2 = localStorage.getItem("person");
let arrayObj2 =  localStorage.getItem("array");

const personObj = JSON.parse(personObj2);
const arrayObj = JSON.parse(arrayObj2);

console.log(personObj);
console.log(arrayObj);

// key를 가지고 구별하는 것 중복적인 key 사용하지말기
// 새로운 key로 추가 되는 것 아니라, 기존에 있는 키 값에 value값을 변경한다.

const key_1 = localStorage.key(0);
const key_2 = localStorage.key(1);

console.log(key_1);
console.log(key_2);

for(let i =0; i< localStorage.length; i++){
	
	let key = localStorage.key(i);
	console.log(localStorage.getItem(key));
}
for (const key in localStorage){
	console.log(localStorage.getItem(key));
}
