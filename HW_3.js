//* Задание №1 *//
// let password = 'пароль';
// let passwordUser = String(prompt('Введите пароль'));
// passwordUser = passwordUser.toLowerCase(); //на случай ввода пароля с большой буквы
// (passwordUser === 'пароль') ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

//* Задание №2 *//
// let с = Number(prompt('Введите любое число'));
// (с > 0 && с < 10) ? alert('Верно') : alert('Неверно');

//* Задание №3 *//
// let d = Number(prompt('Введите любое число'));
// let e = Number(prompt('Введите любое число'));
// (e > 100 || d > 100) ? console.log('Верно') : console.log('Неверно');

//* Задание №4 *//
// let a = '2';
// let b = '3';
// a = Number(a); 
// b = Number(b);
// alert(a + b);

//* Задание 5 *//
// let monthNumber = Number(prompt('Введите номер месяца'));
// if (monthNumber > 12 || monthNumber <1) {console.log('Я не знаю такого месяца')}; 
// //Я конечно понимаю, что это решение не то что надо, но другого я не придумал
// switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осень');
//         break;
//     default:
//         //console.log('Я не знаю такого месяца');
//         break;
// }