'use strict';

const length = 40;

function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 2) + fib(n - 1);
    }
}

for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}