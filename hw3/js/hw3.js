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

// let plate = 7, washer = 2.5;
//     while (plate > 0) {
//         if (washer > 0) {
//             plate -= 1;
//             washer -= 0.5;
//             console.log(`Осталось моющего средства: ${washer}`);
//             console.log(`Осталось тарелок: ${plate}`);
//         }
//     }


// Задача массив 1

// Задача массив 2

// Задача массив 3

let nums = [
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
