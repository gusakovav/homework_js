'use strict';

let titleElems = document.querySelectorAll('.article p:first-child');
// [p, p, p]
// перебор коллекции html элементов
for (let elem of titleElems){
// Array.from(titleElems.forEach(elem=>{})) - то же самое
    // на каждой итерации в переменную  elem копируется элемент коллекции
    // на первой итерации <p>Короткий текст 1</p>
    // на второй итерации <p>Короткий текст 2</p>
    // на третьей итерации <p>Короткий текст 3</p>

    // добавление обработчика события
    // добавляем толь в js! в html нельзя!
    elem.addEventListener('click', openDescription); // функция openDescription будет вызвана только тогда, когда будет при наступлении события: щелчок левой кнопкой мыши
    // функция openDescription будет вызвана только тогда, когда будет при наступлении события: щелчок левой кнопкой мыши
    // в данной ситуации доавлен обработчик на каждый элемент из коллекции
    // if () titleElems[elem -1].nextElementSibling.classList.toggle('open');

}
function openDescription() {
    // this - элемент, на который был повешен обработчик события
    console.log('элемент, на который был повешен обработчик события', this);
    this.nextElementSibling.classList.toggle('open'); // к соседнему элементу this (тэг p), применён метод toggle - переключение классов - устанавливает класс open, если его нет и удаляет, если есть
    // скрытие элементов
    for (let elem of this.parentElement.parentElement.children) {
        if (elem.lastElementChild !== this.nextElementSibling) elem.lastElementChild.classList.remove("open");
    }
}

// если содержимое будет переменным - в html положить всё в div, содержимое менять уже внутри div



// data-*
// атрибут data-* используется для передачи пользовательских данных из html в javascript
// data- - обязательный элемент, после дефиса указываем свою информацию

// получение атрибута data-*:
// элемент.dataset.present

let getPresents = () => {
    return {
        car: 'Машина',
        dog: 'Собака',
        book: 'Книга'
    };
};

let presentContainer = document.getElementById('present_container'); // событие для одного элемента
presentContainer.addEventListener('click', showPresent);
    // при клике на present_container вызывается функци showPresent, в нее передается объект с информацией о событии

    function showPresent(event) {
        // this - presentContainer
        console.log('информация о событии', event);
        let clickElem = event.target; // элемент, на котором произошло событие
        let presentValue = clickElem.dataset.present;
        if (presentValue) { // car / book/ dog
            let presents = getPresents();
            clickElem.innerText = presents[presentValue];
            clickElem.classList.add('present');
            // удаление обрботчика, чтобы ограничить количество выбора подрков пользователем
            // presentContainer.addEventListener('click', showPresent);
            this.removeEventListener('click', showPresent);
        }
    }



// фиксация header при прокрутке
window.addEventListener('scroll', fixedMenu);
let fixedBlock = document.getElementById('fixed');
let fixedBlockOffsetTop = fixedBlock.getBoundingClientRect().top; // getBoundingClientRect возвращает координаты прямоугольника, в котором заключён элемент

function fixedMenu () {
    if (window.pageYOffset > fixedBlockOffsetTop) { 
        fixedBlock.classList.add('fixed');
    } else {
        fixedBlock.classList.remove('fixed');
    }

}

