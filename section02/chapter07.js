// 6가지의 요소 조작 메서드
// 1. push 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
//console.log(newLength);

// 2. pop 메서드
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
// console.log(poppedItem);
// console.log(arr2);

// 3. shift 메서드
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3);

// 4.unshift 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(newLength2, arr4);

// shitf와 unshift는 push나 pop보다 느리게

// 5. slice 메서드
let arr5 = [1, 2, 3, 4, 5];
const sliceItem = arr5.slice(2, 5);
const sliceItem2 = arr5.slice(2);
const sliceItem3 = arr5.slice(-1);
// console.log(arr5, sliceItem);

// 6.concat 메서드
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
