'use strict'

// Задача 1

let num = 1;
for (let attemptCount = 1; attemptCount <= 20; attemptCount++) { 
    num *=2;
    console.log(num);
    }

// Задача 2

let e = 90;
while (e >= 0) {
        console.log(e)
    e-=5;
}

// Задача 3

let plate = 7, washer = 2.5; // как в while объявить два условия? почему-то мой код этого задания подвешиванит страницу, она не прогружается
    while (plate > 0) {
        if (washer > 0) {
            plate -= 1;
            washer -= 0.5;
            console.log(`Осталось моющего средства: ${washer}`);
            console.log(`Осталось тарелок: ${plate}`);
        }
    }


// Задача массив 1

let array = [];
array.length = 10;
// console.log(array);
for (let index = 0; index < array.length; index++) {
    array[index] = Math.floor(Math.random()*100);
}
console.log(array)
console.log(array[Math.floor(Math.random()*100)]) // вывод рандом значения
let summ = 0; 
    for (let element of array) { 
        summ += element;
}
console.log(summ);
let mid = summ / array.length; // среднее зачение
console.log(mid);


// Задача массив 2

let arr = [4, 9, 1, 3, 5, 2, 8]; // не понял


// Задача массив 3

let nums = [    // не понял, как сложить многомерный массив, выводится просто в сроку при моём решении
    [23, 56, 78, 12, -900],
    [0, 0, 67, -3, 621],
    [89, 67, 12],
    [23, 56, 78, 12, -900, 89, 33, 21]
 ];
let sum = 0; 
    for (let elem of nums) { 
        sum += elem;
}
console.log(sum);
