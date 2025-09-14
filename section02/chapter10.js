// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 (new 사용)

let date2 = new Date("1997-01-07/10:10:10");

// 2. 타임 스탬프
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
// console.log(date1);
// console.log(date4);

// 3. 시간 요소들을 추출하는 방법
// let year = date1.getFullYear();
// let month = date1.getMonth() + 1;
// let day = date1.getDate();

// let hour = date1.getHours();
// let min = date1.getMinutes();
// let seconds = date1.getSeconds();

// console.log(year, month, day, hour, min, seconds);

// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(11);
date1.setDate(11);
date1.setHours(8);
date1.setMinutes(30);
date1.setSeconds(30);

// console.log(date1);

// 5. 시간으로 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleDateString());
