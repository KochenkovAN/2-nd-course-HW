//* Задание 1 *//
let str = String(prompt('Введите любой текст'))
let newStr = str.toUpperCase();
alert(newStr);

//* Задание 2 *//
let arr = ['Кошка', 'Кит', 'Комар', 'Носорог'];
let search = 'ко';//критерий поиска
arr.forEach((searchStart) => {
	if (searchStart.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(searchStart);}});

//* Задание 3 *//
// let a = 32.58884;
console.log(Math.floor(a));//округление до меньшего целого
console.log(Math.ceil(a));//округление до большего целого
console.log(Math.round(a));//округление до ближайшего целого

//* Задание 4 *//
let b = 52, c = 53, d = 49, e = 77, f = 21, g = 32;
let min = Math.min(b, c, d, e, f, g); //поиск минимума
let max = Math.max(b, c, d, e, f, g); //поиск максимума
console.log(min); 
console.log(max);

//* Задание 5 *//
let min = 1; //минимальное значение
let max = 10; //максимальное значение
console.log( Math.round(Math.random() * (max - min)) + min);

//* Задание 6 *//
let a = Number(prompt("Введите число"));
let min = 0;
let max = a;
let arr = []; //создаем пустой массив для записи в него случайных чисел
    for ( let i = min; i < Math.floor(a / 2); ++i ) {
        arr.push( Math.round(Math.random() * (max - min)) + min);}
        console.log(arr);

//* Задание 7 *//
let min = Number(prompt('Введите первое целое число'));//минимальное значение
let max = Number(prompt('Введите второе целое число'));//максимальное значение
console.log( Math.round(Math.random() * (max - min)) + min);

//* Задание 8 *//
let currentDate = new Date();
console.log(currentDate);

//* Задание 9 *//
//способ 1
let currentDate = new Date(2023, 2, (21+73));//к текущей дате прибавляем 73 дня
console.log(currentDate);
//способ 2
let currentDate = new Date();//переменная с текущей датой
console.log(currentDate);//текущая дата
currentDate.setDate(currentDate.getDate()+73);
console.log(currentDate);//дата, через 73 дня

//* Задание 10 *//
//* Задание 10 *//
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let rusDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()].toLowerCase();
let rusTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
console.log(rusDate);
console.log(rusTime);

//* Задание 11 *//
let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
arr = arr.sort(()=>Math.random() - 0.5);//перемешанный массив
alert(arr); //показываю массив пользователю
let firstUserAnswer = (String(prompt("Чему равнялся первый элемент массива?"))).toLowerCase();//ввести первый ответ
let secondUserAnswer = (String(prompt("Чему равнялся последний элемент массива?"))).toLowerCase(); //ввести второй ответ
let firstElem = arr[0].toLowerCase();
let secondElem = arr[6].toLowerCase();
//варианты ответов игры
if (firstUserAnswer === firstElem && secondUserAnswer === secondElem) {console.log("Все верно!");} 
else if (firstUserAnswer === firstElem || secondUserAnswer === secondElem) {console.log("Вы были близки к победе!");}
else if (firstUserAnswer != firstElem && secondUserAnswer != secondElem) {console.log("Все неверно");}
