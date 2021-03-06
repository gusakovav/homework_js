'use strict';

// Задание 1
// Написать функцию генерации карточек с информацией о животных.

function genCats() {
    return [
        {
            "name": "Люся",
            "age": "1 год",
            "color": "трехцветная",
            "additional_info": {"vaccinations": true, "passport": true}
        },
        {
            "name": "Том",
            "age": "3 месяца",
            "color": "белый",
            "additional_info": {"vaccinations": false, "passport": false}
        },
        {
            "name": "Макс",
            "age": 2,
            "color": "серый",
            "additional_info": {"vaccinations": false, "passport": true}
        },
        {
            "name": "Василий",
            "age": 3,
            "color": "черный",
            "additional_info": {"vaccinations": true, "passport": true}
        }
    ];
}

function generateCatsCards(catsElem) {
  let cats = genCats();
  for (let i = 0; i < cats.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");

    let catsName = document.createElement("span");
    catsName.innerText = cats[i].name.toUpperCase();

    let line = document.createElement("span");
    line.innerText = " | ";

    let catsAge = document.createElement("span");
    catsAge.innerText = `Возраст: ${cats[i].age}`;

    let catsInfo = document.createElement("div");
    catsInfo.classList.add("catsInfo");

    let imgCat = document.createElement("div");
    imgCat.classList.add("imageCat");

    let img = document.createElement("img");
    img.setAttribute("src", "img/" + (i + 1) + ".jpg");

    let info = document.createElement("div");
    info.classList.add("info");

    let addInfo = document.createElement("h3");
    addInfo.innerText = "Дополнительная информация:";

    let catColor = document.createElement("p");
    catColor.innerText = `Цвет: ${cats[i].color}`;

    let catDoc = document.createElement("p");
    catDoc.innerText = `Документы: ${cats[i].additional_info.passport ? "Есть" : "Нет"}`;

    let catVac = document.createElement("p");
    catVac.innerText = `Прививки: ${cats[i].additional_info.vaccinations ? "Есть" : "Нет"}`;

    info.append(addInfo, catColor, catDoc, catVac);
    imgCat.append(img);
    catsInfo.append(imgCat, info);
    title.append(catsName, line, catsAge);
    card.append(title, catsInfo);
    catsElem.append(card);
  }
}
generateCatsCards(document.querySelector(".cats"));



// Задание 2
// Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
// Функция не должна быть привязаны к конкретным значениям.
// Заголовки ячеек - названия свойств.
// Например, для articles заголавками будут: id, title, text, author;
//  для goods заголавками будут: title, price, count.
 // Массивы для тестирования:
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



