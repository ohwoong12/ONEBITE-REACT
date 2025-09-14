// 1. if 조건문
// let num = 10;

// if (num >= 20) {
//   console.log("num은 10 이상입니다.");
// } else if (num >= 5) {
//   console.log("num은 5 이상입니다.");
// } else {
//   console.log("num은 10 이상이 아닙니다.");
// }

// 2. switch 문
// if문과 기능 자체는 동일
// 다수의 조건을 처리할 때 if문보다 직관적임

let animal = "cat";
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "DOG": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  default: {
    console.log("그런 동물은 없습니다.");
    break;
  }
}
