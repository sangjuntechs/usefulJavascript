"use stricts";
// truthy & falsy
/* 
javascript에서의 falsy 값들은 null, undefined , 0등이 있다.
*/

function print(car) {
  console.log(car.name);
}

const cars = {
  name: "bmw 3 series",
};

print(cars);

//인수를 넣지 않으면 car.name을 찾을 수 없기 때문에 undefined가 된다.
// null도 마찬가지로 falsy한 값인데 앞에 !를 넣으면 falsy값들의 오류처리를 할 수 있다.

function print2(car) {
  if (!car) {
    return console.log("차량의 이름을 알 수 없습니다.");
  }
  console.log(car.name);
}

const cars2 = {
  name: "benz c class",
};

print2(null);

//spread 연산자 es6 이상부터 (...복사할 object or array)

const firstbmw = {
  name: 'bmw',
};

const bmw3series = {
  ...firstbmw,
  grade: 'entry',
};

const bmw3series320d = {
  ...bmw3series,
  fuel: 'digel',
};

console.log(firstbmw);
console.log(bmw3series);
console.log(bmw3series320d);
