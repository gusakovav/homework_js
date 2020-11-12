'use strict';

// Задание 1
let a, b, c, S;
a = 2; // ширина
b = 7; // длина
c = 3; // высота
S = 2*(a*b + b*c + a*c);
console.log(S);

// Задание 2
let num, numOne, numTwo, sum;
num = 45;
numOne = num % 10 // считаю остаток от деления на 10 (второ число) - 5
// console.log(numOne);
numTwo = (num - numOne) / 10; // считаю первое число - 4
// console.log(numTwo);
sum = numOne + numTwo;
console.log(sum);

// Задание 3
let x, y;
x = 6;
y = 86;
x = x + y;
y = x - y;
x = x - y;
console.log(x);
console.log(y);
