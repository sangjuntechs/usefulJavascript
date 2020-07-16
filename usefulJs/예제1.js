"use stricts";
// 삼항연산자.

//기본 if 문
const arr1 = [];

if (arr1.length === 0) {
  text = "배열이 비어있습니다.";
} else {
  text = "배열이 비어있지 않습니다.";
}

console.log(text);

//삼항연산자로 리팩토링
const arr2 = [1, 2];
let text2 =
  arr2.length === 0
    ? (text = "배열이 비어있습니다.")
    : "배열이 비어있지 않습니다.";

console.log(text2);
