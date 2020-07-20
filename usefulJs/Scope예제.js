"use strict";

//scopes
const value = "hello world!";

function hello() {
  console.log(`this function's values is global scope's: ${value}`);
}

function bye() {
  const value = "bye world!";
  console.log(`this function is bye's scope: ${value}`);
}
hello();
bye();

console.log(`this is global scope: ${value}`);

//block scopes

const value2 = "example1";

function fn() {
  const value2 = "example2";
  console.log(`function scope value2: ${value2}`);
  if (true) {
    const value2 = "example3";
    console.log(`block scope value2 : ${value2}`);
  }
}

fn();
console.log(`global value2: ${value2}`);
