//* Задание №1 *//
let password = 'пароль';
let passwordUser = String(prompt('Введите пароль'));
passwordUser = passwordUser.toLowerCase(); //на случай ввода пароля с большой буквы
(passwordUser === 'пароль') ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

//* Задание №2 *//
let с = Number(prompt('Введите любое число'));
(с > 0 && с < 10) ? alert('Верно') : alert('Неверно');

//* Задание №3 *//
let d = Number(prompt('Введите любое число'));
let e = Number(prompt('Введите любое число'));
(e > 100 || d > 100) ? console.log('Верно') : console.log('Неверно');

//* Задание №4 *//
let a = '2';
let b = '3';
a = Number(a); 
b = Number(b);
alert(a + b);

//* Задание 5 *//
let monthNumber = Number(prompt('Введите номер месяца'));
if (monthNumber > 12 || monthNumber <1) {console.log('Я не знаю такого месяца')}; 
// //Я конечно понимаю, что это решение не то что надо, но другого я не придумал. Хотя строка сверху то же избыточна, ведь при вводе числа отличного от (1...12) все равно программа прирывается.
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Я не знаю такого месяца');
        break;
}

//* Задание 7 *//
//работает, но нет проверки число ввели или нет
let x = Number(prompt('Введите любое число'));
(x % 2) === 0 ? alert('Четное') : alert('Нечетное');

//второй вариант решения, надеюсь правильный
let a = Number(prompt('Введите первое число'));
let x = a % 2;//если остаток от деления 1 - то нечетное, если NaN - ввели не число
if (x === 0) {alert('Четное');}
else if (x > 0 || x < 0) {alert('Нечетное');}
else if (isNaN(x)) {alert('Ввели не число');}