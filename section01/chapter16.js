const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};
// animal = { a: 1 }; // 오류

// 프로퍼티를 수정하는건 오류가 발생하지 않음
animal.age = 2;
animal.name = "까망이";
delete animal.color;

// 2. 메서드
const person = {
  name: "권오웅",

  // 메서드
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
person["sayHi"]();
