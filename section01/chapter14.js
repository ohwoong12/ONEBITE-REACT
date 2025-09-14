// 스코프
// 전역 스코프 / 지역 스코프
// 전역 => 전체 영역에서 접근 가능함
// 지역 => 특정 영역에서만 접근이 가능함

let a = 1; // 전역 스코프를 갖는 전역 변수

function funcA() {
  let b = 2; // 지역 스코프를 갖는 변수
  //console.log(a);
}
funcA();
// console.log(b); // 오류 발생하는 코드

if (true) {
  let c = 1; // 조건문 안에서도 지역 스코프를 갖게 됨
}
// console.log(c);  // 오류 발생

for (let i = 0; i < 1; i++) {
  let d = 1;
}
// console.log(d);  // 오류 발생
