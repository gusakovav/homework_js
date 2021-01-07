'use string';

// Задание 1
//  Напишите функцию, которая в зависимости от переданного в нее целочисленного
// аргумента count, будет возвращать слово "товар" в нужно форме
// ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).

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
// Напишите функцию range, принимающую три аргумента:
// два обязательных: начало и конец диапазона,
// третий аргумент - необязательный (если он не передан, то равен единице) –
// шаг для построения массива.

// Функция возвращает массив, который содержит все числа из диапазона,
// включая начальное и конечное.
// Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]

function range(first, last, step = 1) {
    let arr = [];
    for (let n = first; n <= last; n += step) {
        arr.push(n);
}
return arr;
}
console.log(range(3, 17, 3));


// Задание 3
// Дано целое положительное число N. Вычислите сумму его цифр, используя рекурсию
// (строки, массивы и циклы использовать запрещено).

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
// На методы массивов
// Дан массив:
//  let numsArr = [
//      [3, 5, -1, 6, 0],
//      [56, -9, 111, 6],
//      [11, 86, -12],
//  ];
//
//  1. Увеличить кажый элемент массива на 10
//  2. Создать массив, в который войдут положительные элементы numsArr

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
// console.log(numsArr);

let newArrPositive = [];
for (let i = 0; i < numsArr.length; i++) {
    newArrPositive[i] = numsArr[i].filter(elem => elem > 0);
};
console.log(newArrPositive);


// Задание 5
// Написать функцию проверки на спам.
// Функция принимает на вход текст и ...спам - слова (переменное количество аргументов).
// Определить по 5ти бальной шкале, как часто в тексте встречается спам.
// Результат вернуть из функции.

let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex odio assumenda corporis sint rem esse laudantium vitae nesciunt facilis?";

function spamFind(text, ...spam) {
  let lowerText = text.toLowerCase().split(" ");
  let count = 0;
  for (let elem of lowerText) {
    for (let word of spam) {
      if (elem.includes(word)) {
         count++;
      }
    }
  }
  if (count === 0) {
    console.log("Спам-слов в тексте не обнаружено.");
  } else
  if (count === 1) {
    console.log(`Количество спам-слов: ${count}, что составляет ${count/lowerText.length*100}% текста`);
  } else if (count === 2) {
    console.log(`Количество спам-слов: ${count}, что составляет ${count/lowerText.length*100}% текста`);
  } else if (count ===3) {
    console.log(`Количество спам-слов: ${count}, что составляет ${count/lowerText.length*100}% текста`);
}
}
spamFind(text, "elit", "dol3or");


// Задание 6
// Написать функцию, которая принимает на вход массив фукций и число, обрабатывает
// число каждой функцией и возвращает true, если число прошло проверку всеми функциями
// и false, если нет
// Функции для проверки:
//  let more18 = возвращает true, если переданный аргумент больше 18
//  let less30 = возвращает true, если переданный аргумент меньше 30
//  let arr = [more18, less30];
//
// Число для проверки:
//  let age = Math.floor(Math.random() * 100);

let more18 = n => n > 18;
let less30 = n => n < 30;
let ageArr = [more18, less30];
let age = Math.floor(Math.random() *100);

let functionNum = (array, n) => array.every(arrayFunc => arrayFunc(n));

console.log(`Число: ${age}, проверка: ${functionNum(ageArr, age)}`);
