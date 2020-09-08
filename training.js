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

// Значение parseInt(показывает число без букв 50px)   и  parseFloat(показывает числа с дробью 1.221)
// let height = '29px';
// height = Number.parseInt(height);
// console.log('высота:', height, 'px');

const name = '«Генератор защитного поля»,';
const price = 1000;
console.log('Выбран', name, 'цена за штуку', price, 'кредитов.');

console.log('Выбран', name, 'цена за штуку', price * 2, 'кредитов.');
