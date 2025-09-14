// 5가지 요소 순회 및 탐색 메서드
// 1. forEach() 메서드

let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
// console.log(doubledArr);

// 2. includes 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude);

// 3.indexOf 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// console.log(index);

// 4. findIndex 메서드
let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//   if (item % 2 !== 0) return true;
// });
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);

// console.log(findedIndex);
let objArr = [{ name: "권오웅" }, { age: 24 }];
let testfindIndex = objArr.findIndex((item) => {
  if (item.name === "권오웅") return true;
});
// console.log(testfindIndex);

// 5. find 메서드
let arr5 = [{ name: "권오웅" }, { name: "홍길동" }];
const finded = arr5.find((item) => {
  if (item.name === "권오웅") return true;
});

console.log(finded);
