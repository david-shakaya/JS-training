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
 *
 *
 *  
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
console.log(Number(price.toFixed(2))); 
 *
 *
 * 
 */

/*   ----ЗАДАЧА---- 
 -Напиши скрипт который просит пользователя ввести число и степень.
-Возведи введенное число к степени и выведи результат в консоль. */
/*    ----РЕШЕНИЕ-----
let base = prompt('Введи число');
base = Number(base);

let power = prompt('Введи  СТЕПЕНЬ');
power = Number(power);

console.log(`Ваш результат: ${base ** power}`); 
 *
 *
 * 
*/

/* Генерация случаного числа от 0 до 1.
console.log(Math.random());
 */

/* 
Генерация случайного числа от и до(любые числа) 
(в данном случае числа будут с дробью пример: 32.2342)

const min = 12;
const max = 138;
console.log(Math.random() * (max - min) + min);   
 *
 *
*/

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
 *
 *
 * /

//  Нормализация метододом "toLowerCase"
// Меняет буквы с верхнего регистра на нижний

/* let brand = 'SamSung';
brand = brand.toLowerCase();
console.log(brand); 
*
*
*/

//  Поиск в строке методом includes() - Ищет слово в строке и передает информацию,
// если есть это слово - "true" если нет "fals".

const blackListeWord1 = 'спам';
const blackListeWord2 = 'распродажа';

const string1 = 'Привет, я принц абдул и это не спам, хочешь выиграть милион?';
const string2 = 'Невероятная РАСПРОДАЖА часов, по низким ценам. Это не СПАМ ';
const string3 = 'Лучший бутик в Киеве все самое лучшее только у нас!';

console.log('Это спам?', string1.includes(blackListeWord1));
console.log('Это распродажа?', string1.includes(blackListeWord2));

console.log('Это спам?', string2.toLowerCase().includes(blackListeWord1));
console.log('Это распродажа?', string2.toLowerCase().includes(blackListeWord2));

console.log('Это спам?', string3.toLowerCase().includes(blackListeWord1));
console.log('Это распродажа?', string3.toLowerCase().includes(blackListeWord2));

// ОПЕРАТОРЫ СРАВНЕНИЯ!-Значение равно == . Значение Строгое равенство === . Значение не равно !==.
/* console.log(4 > 5);
 *
 */

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ!-
// Приведение к булю на примере Boolean()
// false в логическом преобразовании: 0, NaN, null, undefined, пустая строка: "" или '', false.
// Абсолютно все остальное приводится к true.
/*
 *Логичнское И ( && ) - Запинается на ЛЖИ если все значения правдивые показывает последнее.
 *
 * Пример
 * 
const number = 20;
const result = number > 30 && number < 40;
console.log(result);
*
*
*/
/*
 *Логичнское ИЛИ ( || ) - Запинается на ПРАВДЕ если все значения лживие показывает последнее.
 *
 * Пример
 * 
const number = 20;
const result = number > 10 || number < 50;
console.log(result);
*/
/*
 *Логичнское НЕ ( ! ) - Делает инверсию из правди > ложь из лжи > правду
 *
 * Пример
 * 
console.log(!'number');
*/
/* 
const x1 = 10;
const x2 = 30;
const number = 50;

console.log(`Число ${number} входит до отрезка ${x1}`, x1 > number);
console.log(`Число ${number} находится после отрезка ${x2}`, x2 <= number);
console.log(
  `Число ${number} находится от${x1} до ${x2}`,
  number > x1 && number < x2,
);
console.log(
  `Число ${number} находится до${x1} или после${x2}`,
  number < x1 || number > x2,
);
*
*
*
*/
//  Еще ЗАДАЧА.
/* 
const frend = true;
const onlain = true;
const dnd = false;

const canOpenChat = frend === true && onlain === true && dnd === false;
console.log('Можно открыть чат?', canOpenChat);

// Можно решить проще эту задачу! 

const canOpenChat = frend && onlain && !dnd;
console.log('Можно открыть чат?', canOpenChat);
*
*
*/
/* --------Задача-----
 *
Нужно ограничить доступ к контенту, доступ открыт только для вип или про.
const access1 = 'pro';

const accessOpen = access1 === 'vip' || access1 === 'pro';
console.log('Доступ открыт:', accessOpen);
 */

//  ------------Задача из ДЗ---------

// На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
/* 
const total = 100;
const ordered = 50;

if (total >= ordered) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else if (ordered > total) {
  console.log('На складе недостаточно твоаров');
}

 */
