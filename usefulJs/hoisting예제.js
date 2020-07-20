'use strict';


//hoisting = 선언된 것들을 맨 위로 '끌어올리다.'
hoisting();

function hoisting() {
    console.log('hoisting!')
}

//const와 let은 hoisting이 발생하지 않지만 var은 발생한다. 하지만 값이 이후에 할당되기 때문에 'undefined'로 출력됨을 확인

console.log(a);
var a = 2;

console.log(b);
const b = 3;

console.clear();