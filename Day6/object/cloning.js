// 객체 목사
// cloning
// 객체를 복사 할 수 있다. (자바에서 깊은 복사, 얇은 복사개념)

// 객체 복사는 새로운 객체를 만들어서 안에 있는 값
// 똑같이 복사
// 주소값만 복사를 한 것
const a = { id: "qwer", pw: "qwer" };
const b = a;
b.id = "asdf";
console.log(a);
console.log(b);

// 각각 대입하기
const c = {}; // 비어있는 객체 생성
for (key in a) {
  c[key] = a[key];
}
console.log(c);

// assign(새로운객체, 기존객체) 객체 복사할 때 사용하는 함수
const d = {};
Object.assign(d, a);
console.error(d);

const e = Object.assign({}, d);
console.warn(e);

// 여러개를 하나의 객체에 복사를 한다.
// 복사하는 대상 key 중복되는 것은 새로 만들지 않고
// 덮어쓴다.
const f = { color: "red" };
const g = { color: "pink", size: "big" };

const mix = Object.assign({}, f, g);
console.log(mix);
