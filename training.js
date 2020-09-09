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
Значение parseInt(показывает число без букв: 50px)   и  parseFloat(показывает числа с дробью: 1.221)
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

/* Тоже, что и выше но записано еще КОРОЧЕ
let price = 1000.12334;
console.log(Number(price.toFixed(2))); */

/*   ----ЗАДАЧА---- 
 -Напиши скрипт который просит пользователя ввести число и степень.
-Возведи введенное число к степени и выведи результат в консоль. */
/*    ----РЕШЕНИЕ-----
let base = prompt('Введи число');
base = Number(base);

let power = prompt('Введи  СТЕПЕНЬ');
power = Number(power);

console.log(`Ваш результат: ${base ** power}`); */

/* Генерация случаного числа от 0 до 1.
console.log(Math.random());
 */

/* 
Генерация случайного числа от и до(любые числа) 
(в данном случае числа будут с дробью пример: 32.2342)

const min = 12;
const max = 138;
console.log(Math.random() * (max - min) + min);   */

// Генерация случайного числа БЕЗ ДРОБИ (целое число)
// Math.round - округляет числа

/* const min = 12;
const max = 138;
const result = Math.round(Math.random() * (max - min) + min);
console.log(result); */

const name = '«Генератор защитного поля»,';
const price = 1000; //
console.log('Выбран', name, 'цена за штуку', price, 'кредитов.');

console.log('Выбран', name, 'цена за штуку', price * 2, 'кредитов.');

// -------------------------СТРОКИ------------------------------

// Свойство "langht" считает количество символов в строк
/* const mesage = 'В этой строке 25 символов';
console.log(mesage.length);
 */

//  Нормализация метододом "toLowerCase"
// Меняет буквы с верхнего регистра на нижний
/* 
let brand = 'SamSung';
brand = brand.toLowerCase();
console.log(brand);
 */
