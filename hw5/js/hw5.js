'use string';

// Задание 1

function goods(x) {
    if (x === 11 || x === 12 || x === 13 || x === 14) return `${x} товаров`;
    if (x%10 === 1) return `${x} товар`;
    if (x%10 === 2 || x%10 === 3 || x%10 === 4) return `${x} товара`;
    return `${x} товаров`;
}
// for (let m = 1; m <= 100; m++) {
//     console.log(goods(m));
// }

let count = prompt("Введите количество");
    if (Number.isInteger(+count)) {
        console.log(goods(count));
    } else {
            console.log(`Введено ${count}, это не целое число`);
        }

        console.log(Number.isInteger(count));

// Задание 2

function range(first, last, step = 1) {
    let arr = [];
    for (let n = first; n <= last; n += step) {
        arr.push(n);
}
return arr;
}
console.log(range(3, 17, 3));


// Задание 3

function sumOfNums(num) {
    if (!Number.isInteger(num) || num <= 0) return `${num} не целое положительное число`;
        if (num < 10) return num; 
            return num%10 + sumOfNums(Math.floor(num/10));
}
console.log(sumOfNums(334));

// Проверка на число
// value === "" || value === null || !isFinite(value)) break;

// !Number.inInteger

// Задание 4

 let numsArr = [
            [3, 5, -1, 6, 0],
            [56, -9, 111, 6],
            [11, 86, -12],
        ];

let newArr = (elem, index, arr) => {
    let newArrInside = (elem, index, arr) => arr[index] +=10;
    arr[index].forEach(newArrInside); 
};
numsArr.forEach(newArr);
console.log(numsArr);

let newArrPositive = [];
for (let i = 0; i < numsArr.length; i++) {
    newArrPositive[i] = numsArr[i].filter(elem => elem > 0);
};
console.log(newArrPositive);


// Задание 5



// Задание 6

let more18 = n => n > 18;
let less30 = n => n < 30;
let ageArr = [more18, less30];
let age = Math.floor(Math.random() *100);

// не совсем понял, что должно происходить далее