// 1. 콜백함수
function main(value) {
  //console.log(value);
  value();
}

// function sub() {
//   console.log("I am sub");
// }

//main(sub);
main(() => {
  //console.log("I am sub");
});

// 지금 value라는 매개변수에는 sub 함수가 담겨있음
// 왜 콜백이냐? = 나중에 실행되는 뜻을 가짐
// sub 함수는 당장 실행되는 것이 아닌 main 함수에 인수로 전달되기 때문임

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    // console.log(i);
    callback(i);
  }
}

repeat(5, (i) => {
  console.log(i);
});

repeat((i) => {
  console.log(i * 2);
});
