// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

// 2. 객체의 구조 분해 할당
let person = {
  name: "권오웅",
  age: 24,
  hobby: "cycle",
};

let { age: myAge, hobby, name, extra = "몰루" } = person;
// console.log(myAge, name, hobby, extra);

// 3. 객체 구조 분해 할당을 이용한 함수의 매개변수를 받는 방법

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
func(10);
