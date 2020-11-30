'use strict';

// Задание 1

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function getGoodsByPrice(from, to, obj) {
if (typeof(from) != "number" || typeof(to) != "number") return `Проверьте ввод: ${from} / ${to} не число`
    let peremObj = {};
    for (let elemObj in obj) {
        if (obj[elemObj].price > from && obj[elemObj].price <= to) {
            peremObj[elemObj] = obj[elemObj];
        }
    }
    return peremObj;
}
console.log(getGoodsByPrice(500, 3000, goods));

// Задание 2

function getByTitle(title, countToCart, obj) {
        for (let elemTitle in obj) {
            if (title === obj[elemTitle].title) {
                if (countToCart <= obj[elemTitle].count) {
                    obj[elemTitle].count -= countToCart;
                    console.log(`Товар в наличии. Заказ принят.`);
            } else {
                console.log(`Указанного количества нет на складе.`);
            }
            return;
        } 
}
console.log('К сожалению, выбранный товар отсутствует в каталоге');
}
getByTitle('Арфа',93, goods);
console.log(goods);


// Задание 3

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
    { author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
    { author: 'Лермонтов', title: 'Тамань', pageCount: 190},
    { author: 'Гончаров', title: 'Обломов', pageCount: 610},
    { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
    { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
    { author: 'Лермонтов', title: 'Бородино', pageCount: 2},
];

function getBooks(authors, arr) {
    let newArr = [];
        for (let elemBook in books) {
            if (authors === books[elemBook].author) {
                newArr.push(books[elemBook].title);
            }
        }
    console.log(newArr);
}
getBooks('Пушкин', books);

// Задание 4

function sortByParam(first, second) { 
    return first.pageCount - second.pageCount;
}
books.sort(sortByParam);
console.log(books);

