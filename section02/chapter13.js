function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수
    // executor라고 부름
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

// then 메서드
// 그 후에라는 뜻
// promise가 성공하게 되면
// == executor 함수에서 resolve()를 호출하게 되면 그 후에 tehn 메서드에 전달한 콜백 함수를 실행
// + resolve()의 인수로 전달한 결과 값을 매개변수로 전달해줌
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
