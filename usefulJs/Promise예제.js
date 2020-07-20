'use strict';


//promise 사용과 에러핸들 promise chaining
function promise(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value > 8) {
                const error = new Error();
                error.name = 'so many jobs';
                reject(error);
                return
            }
            console.log('result:', n)
            resolve(value)
        },1500)
    })
}

promise(0).then( n => {
    return promise(n);
}).then( n => {
    return promise(n);
}).then(n => {
    return promise(n);
}).then( n => {
    return promise(n);
}).then(n => {
    return promise(n);
}).then( n => {
    return promise(n);
}).then(n => {
    return promise(n);
}).then( n => {
    return promise(n);
}).then(n => {
    return promise(n);
})
.catch(e => {
    console.error(e);
})