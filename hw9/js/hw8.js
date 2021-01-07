'use strict';

// Задача на генерацию таблицы (часть 2):
// при нажатии на заголовок ячейки должна происходить сортировка по соответствующему столбцу, например:

//   Например, для массива goods из файла таблица будет следующего вида:
//    TITLE     PRICE   COUNT
//   Пианино    3000     25
//   Гитара     1200     40
//   Барабаны   2700     12
//   и тд
//   Вывод после нажатия на COUNT:
//    TITLE     PRICE   COUNT
//   Барабаны   2700     12
//   Пианино    3000     25
//   Гитара     1200     40
//   и тд      
  
 let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

// Примеры вызова функции:
//  generateTable(articles); // генерация таблицы со статьями
//  generateTable(goods); // генерация таблицы с товарами

function generateTable(array) {
 let table = document.createElement("table");
 let row = table.insertRow();
 for (let elem in array[0]){
   let th = document.createElement("th");
   th.innerText = elem;
   row.append(th);
 }

 for (let element of array) {
   row = table.insertRow();
   for (let value in element) {
     let cell = row.insertCell();
     cell.innerText = element[value];
   }
 }
 document.querySelector(".table").append(table);
}
generateTable(articles);
generateTable(goods);


//Доделать задачу на генерацию поля: generateField.

// Дан объект {
//     cat: "Кот",
//     book: "Книга",
//     car: "Машина"
// }

// Написать функцию generateField(n) по генерации игрового поля размером n x n.
// Значение n не может быть меньше 3.
// Для 3х ячеек поля (для выбора конкретной ячейки использовать random) 
// добавить атрибут prise. Значения атрибута prise устанавливаются из массива.
// Для 1й ячейки значение атрибута prise="cat",
// для 2й ячейки значение атрибута prise="book",
// для 3й ячейки значение атрибута prise="car" 

let allPrise = {
    cat: "Кот",
    book: "Книга",
    car: "Машина"
  };

function generateField(n) {
 if (n < 3 || n > 30) return;

 let counter = 0;
   let container = document.createElement("div");
   container.style.width = '30vw';
   container.style.display = 'flex';
   container.style.flexWrap = 'wrap';
   let size = 30/n;
   for (let i = 0; i < n * n; i++) {
       let innerDiv = document.createElement("div");
       innerDiv.setAttribute("id", counter);
       innerDiv.style.border = '2px solid grey';
       innerDiv.style.width = innerDiv.style.height = size + 'vw';
       counter++;
       container.append(innerDiv);
   }

   document.getElementById("game").append(container);

   let priseArr = Object.keys(allPrise);
   for ( let prise of priseArr) {
     document.getElementById(`${Math.floor(Math.random() * (n*n))}`).setAttribute("prise", prise);
   }

}
generateField(3);



