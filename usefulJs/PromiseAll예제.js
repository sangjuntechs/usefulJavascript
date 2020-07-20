"use strict";

//promise all은 promise들의 병렬처리시 사용한다.

//일반 promise
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const getBmw = async () => {
  await wait(1000);
  return "BMW";
};

const getBenz = async () => {
  await wait(1000);
  return "Benz";
};

const getAudi = async () => {
  await wait(3000);
  return "Audi";
};

async function makeCar() {
  const bmw = await getBmw();
  console.log(bmw);

  const benz = await getBenz();
  console.log(benz);

  const audi = await getAudi();
  console.log(audi);
}

makeCar();

//promise all = 제일 마지막 작업이 끝난 후 일괄출력
const getKia = async () => {
    await wait(4000);
    return 'Kia';
}

const getHyundai = async () => {
    await wait(4000);
    return 'Hyundai';
}

const getChevrolet = async () => {
    await wait(8000);
    return 'Chevrolet';
}

async function makeCar2() {
    const carList = await Promise.all([getKia(), getHyundai(), getChevrolet()]);
    console.log(carList);
}

makeCar2();

//makeCar() 이 끝난 뒤 makeCar2() 동작
async function allProcess() {
    await makeCar();
    await makeCar2();
}

console.log(allProcess());
