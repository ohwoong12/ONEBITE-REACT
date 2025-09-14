// function funcA() {
//   console.log("funcA");
// }

// // 함수 호출문이 아닌 함수 자체를 변수에 저장
// let varA = funcA;
// console.log(varA);

// let varB = function () {
//   console.log("funcB");
// };
// varB();

// 2. 화살표 함수

let varC = (value) => {
  return value + 1;
};

console.log(varC(10));
