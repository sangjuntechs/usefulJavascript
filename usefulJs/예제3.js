//rest 와 spread

"use stirct";

const Bmw = {
  name: "bmw",
  price: "5000",
  series: "3",
};

const { series, ...Bmw2 } = Bmw;

console.log(series);
console.log(Bmw2);

const { price, ...bmw3 } = Bmw2;
console.log(bmw3);

const cars = ["benz", "hyundai", "kia", "chevrolet"];

const [benz, ...anycars] = cars;

console.log(benz);
console.log(anycars);

//rest 예제

function sum(...rest) {
  return rest.reduce((acc, curr) => acc + curr, 0);
}


//rest는 인자로도 사용 가능
console.log(sum(1, 2, 3, 4, 5, 6));

const sum2 = [1,2,3,4,5,6];
console.log(sum(...sum2));

function max2(...rest) {
    return Math.max.apply(null,rest)
}

const result = max2(1, -1 , 0, 10, 5, 7, 12 ,999);
console.log(result)