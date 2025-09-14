// 1. 객체 생성
// 자바스크립트에서는 2가지 방식으로 객체 생성 가능

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

let person = {
  name: "권오웅",
  age: 24,
  hobby: "cycle",
  jo: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

// 2. 객체 프로퍼티를 다루는 방법
// 2.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"];
//console.log(age);

let property = "hobby";
let hobby = person[property];
//console.log(hobby);

// 2.2 새로운 프로퍼티를 추가하는 방법
// 괄호 표기법이나 점 표기법 사용
person.job = "BE Developer";
person["favoriteFood"] = "떡볶이";

// 2.3 프로퍼티를 수정하는 방법
// 이하 동일
person.job = "educator";
person["favoriteFood"] = "치즈";
console.log(person);

// 2.4 프로퍼티를 삭제하는 방법
// delete 연산자 활용
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 2.5 프로퍼티의 존재 유무를 확인하는 방법
// in 연산자 활용
let result1 = "name" in person;
console.log(result1);
