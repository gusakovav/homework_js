'use strict'

// Задание 1

let sum;
let result;
sum = 100;
if (sum < 1000) {
    result = 'Скидка не предусмотрена';
} else if (sum >= 1000 && sum < 2000) {
    result = 'Ваша скидка: 5%.';
    sum = sum * 0.95;
} else if (sum >= 2000 && sum < 3000) {
    result = 'Ваша скидка: 10%.';
    sum = sum * 0.9;
} else if (sum >= 3000) {
    result = 'Ваша скидка: 10% + подарок.';
    sum = sum * 0.9 + '. Получите подарок!';
}
console.log(result);
console.log(`Сумма к оплате: ${sum}`); // не получилось вывести две строки console в одну

// Задание 2

let lang = 'javascript';
let salary = 100000;
let res;

if (lang === 'javascript') {
if (salary >= 100000) {
    res = 'Приглашаем на собеседование';
} else if (salary < 100000) { 
    res = 'Мы Вам перезвоним'
}
} else {
    res = 'Мы Вам перезвоним'
}
console.log(res);


// Задание 3

const month = 'Декабрь';
let season;
switch (month) {
    case 'Декабрь' :
    case 'Январь' :
    case 'Февраль' :
        season = 'Зима';
        break;
    case 'Март' :
    case 'Апрель' :
    case 'Май' :
        season = 'Весна';
        break;
    case 'Июнь' :
    case 'Июль' :
    case 'Август' :
        season = 'Лето';
        break;
    case 'Сентябрь' :
    case 'Октябрь' :
    case 'Ноябрь' :
        season = 'Осень';
        break;
    default:
        season = 'Месяц введён некорректно';
}
console.log(`Текущее время года: ${season}`); 
