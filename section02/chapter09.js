// 5가지 배열 변형 메서드

// 1. filter 메서드
let arr1 = [
  { name: "권오웅", hobby: "cycle" },
  { name: "홍길동", hobby: "cycle" },
  { name: "이무기", hobby: "독서" },
];

const cyclePeople = arr1.filter((item) => {
  if (item.hobby === "cycle") {
    return true;
  }
});

// console.log(cyclePeople);

// 2. map 메서드
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

// console.log(mapResult1);

let names = arr1.map((item) => {
  return item.name;
});
// console.log(names);

// 3. sort 메서드
//let arr3 = ["b", "a", "c"];
let arr3 = [10, 3, 5];

// 오름차순 정렬
// let sortArr3 = arr3.sort((a, b) => {
//   if (a > b) {
//     // b가 a 앞에 와라
//     return 1;
//   } else if (a < b) {
//     // a가 b 앞에 와라
//     return -1;
//   } else {
//     // 두 값이 동일하면 자리를 바꾸지 마라
//     return 0;
//   }
// });

// 내림차순 정렬
let sortArr3 = arr3.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값이 동일하면 자리를 바꾸지 마라
    return 0;
  }
});

// console.log(sortArr3);

// 3. toSorted 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
// console.log(sorted);
// console.log(arr5);

// 5. join 메서드
let arr6 = ["Hi", "i'm", "KWON"];

const joined = arr6.join(" ");
console.log(joined);
