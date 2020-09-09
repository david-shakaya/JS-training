// const mesage = "hello world";
// console.log("Жоаень---", mesage);

// const yourName = confirm("Укажите пожалуйста ваше имя");
// console.log(yourName);

// const city = prompt("Уrажите ваш город");
// const height = prompt("Какая длина члена");
// console.log(height, city);

// Проверка на число
// console.log(isNaN(name));

// ПРОВЕРКА НА ТИП
// const type = typeof price;
// console.log(type);
// ЛИБО
// console.log(typeof name);     ---name это имя(идентификатор)

/*confirm - Вопрос к юзеру(либо ок либо cancel)
 const yourName = confirm("Укажите пожалуйста ваше имя");
console.log(yourName);


*prompt - ВОПРОС К ЮЗЕРУ с полем для ответа 
 const city = prompt("Уrажите ваш город");
// const height = prompt("Какая длина члена");
// console.log(height, city);

*/

// ПРИСВОЕНИЕ ТИПА  Number
// let age = prompt('Введите ваш возраст');
// age = Number(age);
// console.log('Возраст посетителя:', age, 'лет');

/* 
Значение parseInt(показывает число без букв 50px)   и  parseFloat(показывает числа с дробью 1.221)
let height = '29px';
height = Number.parseInt(height);
console.log('высота:', height, 'px'); */

/* 
АНАЛОГ КОНКАТИНАЦИИ СШИВКИ СЛОВ (ДОВОЛЬНО УДОБНО)
const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;
console.log(sameMessage)
 */

/* МЕТОД ЧИСЛО  .toFixed (Отсечение цыфр после точки) */

// let price = 1000.12334;     /* <--Переменная */
// price = price.toFixed(2);   /* <-- Оставляет количество цифр указанных в скобках(2) после точки */
// price = Number(price);      /* <-- Присваевает тип числа "Number" */
// console.log(price);        /* <-- Выводит в консоль */

/* Тоже самое что и выше только написано короче(метод матрешки)
let price = 1000.12334;
price = Number(price.toFixed(2));
console.log(price);
 */
const name = '«Генератор защитного поля»,';
const price = 1000.12334;
console.log('Выбран', name, 'цена за штуку', price, 'кредитов.');

console.log('Выбран', name, 'цена за штуку', price * 2, 'кредитов.');
