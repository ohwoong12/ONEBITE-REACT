// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// 양의 무한대와 음의 무한대
let inf = Infinity;
let mInf = -Infinity;

// 수치연산이 실패했을 때 결과 값으로 사용
let nan = NaN;

// 2. String Type
let myName = "권오웅";
let myLocation = "부천";
// JavaScript는 문자열 이어붙이기가 가능함
let introduce = myName + myLocation;

// backtick을 이용하여 문자열을 만들면 변수의 값을 동적으로 문자열에 포함시킬 수 있음
// "템플릿 리터럴 문법"이라고 함
let introduceText = `제 이름은 ${myName}입니다.`;

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;
if (isSwitchOn == true) {
  console.log("true 입니다.");
}

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
