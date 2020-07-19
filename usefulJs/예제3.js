//rest 와 spread

'use stirct';

const Bmw = {
    name : 'bmw',
    price : '5000',
    series : '3'
};

const {series, ...Bmw2} = Bmw;

console.log(series);
console.log(Bmw2);

const {price, ...bmw3} = Bmw2;
console.log(bmw3);

const cars = ['benz', 'hyundai', 'kia', 'chevrolet'];

const [benz, ...anycars] = cars;

console.log(benz);
console.log(anycars);