// const mesage = "hello world";
// console.log("Жоаень---", mesage);

// const yourName = confirm('Укажите пожалуйста ваше имя');
// console.log(yourName);

// const city = prompt('Уrажите ваш город');
// const height = prompt('Какая длина члена');
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

// const name = '«Генератор защитного поля»,';
// const price = 1000; //
// console.log('Выбран', name, 'цена за штуку', price, 'кредитов.');

// console.log('Выбран', name, 'цена за штуку', price * 2, 'кредитов.');

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

/* const blackListeWord1 = 'спам';
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
 */
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
// --------------Задача ---- Два вариантарешения
// let balance = 10000;
// let payment = 2000;

// console.log(
//   'Общая стоимость товара',
//   2000,
//   'кредитов! Проверяем количество средств на счету',
// );

// if (balance >= payment) {
//   console.log('На вашем счету осталось', balance - payment, 'кредитов');
//   console.log('Операция завершена');
// } else if (payment > balance) {
//   console.log('На вашем счету недостаточно кредитов для провидения операции');
// }

/* let payment = prompt('На какую сумму покупка?');
payment = Number(payment);
alert('Проверяем количество средств на счету');
if (balance >= payment) {
  alert(`На вашем счету осталось ${balance - payment} кредитов`);
  alert('Операция завершена!');
} else if (payment > balance) {
  alert('На вашем счету недостаточно кредитов для провидения операции');
}
 */
// Задача
/*Напиши скрипт который подсчитывает общую сумму зарплат работников
 * Количество работников хранится в переменно worker.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль*/

// const min = 500;
// const max = 5000;
// const worker = 20;
// let totalSalary = 0;

// for (let i = 1; i <= worker; i += 1) {       /* <- Цыкл созает как бы нумерацию, от 1 до 20 работника. Генерирует случайную ЗП 20 раз. Цыкл*/
//   let salary = Math.round(Math.random() * (max - min) + min);
//   console.log(`Зп  ${i} работника ${salary}`);
//   totalSalary += salary;
// }

// console.log(totalSalary);

// ---------------ЗАДАЧА---------
/* Напиши скрипт который подсчитывает ссумму всехчетных чисел.
 *Которые входят в диапазон от min до max 
 *Например если min = 0; max = 5 то диапазон от 0 до 5. В нем
 два четных числа - 2 и 4 , их сумма 6*/
/* 
const min = 0;
const max = 15;
let total = 0;
for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    console.log('Четное ', i);
    total += i;
  } 
}
console.log('Сумма всех четных чисел', total);
 */
/*
 *
 *-----------------ЗАДАЧА
 *
 *Напиши скрипт подсчета суммы покупки со скидкой в зависимости
 *от потраченной за все время суммы (партнерская програма)
 *
 *- Общая сумма потраченного хранится в переменной totalSpent
 *- Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнер, скидка 2%
 * - Если потрачено от [1000 до 5000) - бронзовый партнер, скидка 5%
 * - Если потрачено от (5000) - бронзовый партнер, скидка 10%
 * - Если потрачено до 100 -не партнер, скидка 0%
 *-
 * - В результате вывести сообщение : Оформлен заказ на сумму(сумма)
 * - со скидкой (скидка)%*/

/* const totalSpent = 5001;
let payment = 100;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  discount = 2;
  const result = (payment / 100) * discount;
  console.log(
    `Оформлен заказ на сумму ${payment}, со скидкой ${
      payment - result
    } кредитов 2%`,
  );
} else if (totalSpent >= 1000 && totalSpent <= 5000) {
  discount = 5;
  const result = (payment / 100) * discount;
  console.log(
    `Оформлен заказ на сумму ${payment}, со скидкой ${
      payment - result
    } кредитов 5%`,
  );
} else if (totalSpent > 5000) {
  discount = 10;
  const result = (payment / 100) * discount;
  console.log(
    `Оформлен заказ на сумму ${payment}, со скидкой ${
      payment - result
    } кредитов 10%`,
  );
} */

// ----ВЫЧИСЛЕНИЕ ПРОЦЕНТОВ ОТ ЧИСЛА

// let payment = 100;
// let discount = 0;

//   discount = 2;
//   const result = (payment / 100) * discount; (Вычисление процентов от числа payment)
/* 
*
*
-----------------ЗАдача номер-3 с ДЗ
Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

Если нажали Cancel, записать в message строку 'Отменено пользователем!'
В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
После всех проверок вывести в alert значение переменной message.
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
*/

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// let ps = prompt('Введите пожалуйста ваш пароль');
// if (ps === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// } else if (ps === null) {
//   message = 'Отменено пользователем!';
// } else {
//   ps !== ADMIN_PASSWORD;
//   message = 'Доступ запрещен, неверный пароль!';
// }
// alert(message);

/* -----------------------------Задача номер 4 из ДЗ
*
*
*
На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). 
Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
 Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество дроидов
 которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 
'Вы купили [число] дроидов, на счету осталось [число] кредитов.'. */

/* const credits = 23580;
let pricePerDroid = 3000;
let totalPrice = prompt('Какое количество дроидов вы хотите купить?');

pricePerDroid *= totalPrice;
if (totalPrice === null) {
  console.log('Отменено пользователем!');
} else if (pricePerDroid > credits) {
  console.log('Недостаточно средств на счету!');
} else if (pricePerDroid <= credits) {
  console.log(
    'Вы купили',
    totalPrice,
    'дроидов, на счету осталось',
    credits - pricePerDroid,
    ' кредитов.',
  );
}
 */
/* Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь
 может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch.
 Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов */

/* let country = prompt('Укажите страну, для осуществления доставки');
let price;
const normalizedCountry = country.toLowerCase();

switch (normalizedCountry) {
  case 'китай':
    price = 100;
    console.log(
      `Доставка в ${normalizedCountry} будет стоить ${price} кредитов`,
    );

    break;

  case 'чили':
    price = 250;
    console.log(
      `Доставка в ${normalizedCountry} будет стоить ${price} кредитов`,
    );

    break;

  case 'австралия':
    price = 170;
    console.log(
      `Доставка в ${normalizedCountry} будет стоить ${price} кредитов`,
    );

    break;

  case 'индия':
    price = 80;
    console.log(
      `Доставка в ${normalizedCountry} будет стоить ${price} кредитов`,
    );

    break;

  case 'ямайка':
    price = 120;
    console.log(
      `Доставка в ${normalizedCountry} будет стоить ${price} кредитов`,
    );

    break;

  default:
    alert('В вашей стране доставка не доступна');
}
 */
/* -------------------------дз 6
*
*
*
*Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel
 и каждый раз добавляет введенное значение к общей сумме.

При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.

*/

let input;
let total = 0;
input = Number(input);

do {
  input = prompt('Введите число');
  total += input;
} while (input !== null);

console.log('Общая сумма чисел равна', total);

/* let total = 0;
let input;

do {
  input = prompt('Number');
  total = total + input;
} while (input !== null);

console.log(total + input); */

// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);
