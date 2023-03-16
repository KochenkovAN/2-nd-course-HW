//* Задание 1 *//
// выбор минимального числа //
// через if 
let a = Number(prompt(`Введи первое число`));
let b = Number(prompt(`Введи второе число`));
function numbers(a,b) {
    if (a < b) {
        return a;
    } else if (a > b){ 
        return b;        
    }
      else if (a === b) {
        return a || b;
      }
    }
console.log(numbers(a,b));

// через тернарные операторы
let a = Number(prompt(`Введи первое число`));
let b = Number(prompt(`Введи второе число`));
function numbers(a,b) {
    return (a < b) ? a : b;
}
console.log(numbers(a,b));

// через стрелочные функции
let a = Number(prompt(`Введи первое число`));
let b = Number(prompt(`Введи второе число`));
let numbers = (a, b) => (a < b) ? a : b;
console.log(numbers(a,b));

//* Задание 2 *//
let c = Number(prompt(`Введите число`));
function typeOfNumber(c) {
    if (c % 2 == 0) {
        return console.log(`Вы ввели четное число`);
    } else if (c > 0 || c < 0) {
        return console.log(`Вы ввели не четное число`);
    }
      else if (isNaN(c)) {
        console.log(`Вы ввели не число`)};
}
typeOfNumber(c);

//* Задание 3.1 *//
let d = Number(prompt(`Введите число`));
function squareOfNumber(d) {
    let square = d * d;
    return square;
    }
console.log(squareOfNumber(d));

//* Задание 3.2 *//
let d = Number(prompt(`Введите число`));
function squareOfNumber(d) {
    return console.log(d * d);
    }
squareOfNumber(d);

//* Задание 4 *//
let age = Number(prompt(`Введите ваш возраст`));
function whatAge(age) {
    if (age < 0 || isNaN(age)) {console.log(`Вы ввели неправильное значение`);} 
    else if (age >= 0 && age <= 12) {console.log(`Привет, друг!`);}
    else if (age >= 13) {console.log(`Добро пожаловать!`);}
}
whatAge(age);

//* Задание 5 *//
let e = Number(prompt(`Введите число`));
let f = Number(prompt(`Введите число`));
function twoNumbers(e, f) {
    if (isNaN(e) === false && isNaN(f) === false) {
        return e * f;
    } else if (isNaN(e) === true || isNaN(f) === true) {
        return console.log(`Одно или оба значения не являются числом`);
    }
}
twoNumbers(e, f);

//* Задание 6 *//
let g = Number(prompt(`Введите число`));
function chekNumber(g) {
    if (isNaN(g) === false) {
        console.log(`${g} в кубе равняется`, `${g ** 3}`);
    } else if (isNaN(g) === true) {
        console.log(`Переданный параметр не является числом`);
    }
}
chekNumber(g);

//* Задание 7 *//
let r1 = Number(prompt(`Введите радиус первой окружности`));
let r2 = Number(prompt(`Введите радиус второй окружности`));

function getS() {
    return (Math.PI * this.radius ** 2);
  }
function getL() {
    return (2 * Math.PI * this.radius );
  }
const circle1 = {
    radius: r1,
    length: getL,
    area: getS,
    };

const circle2 = {
    radius: r2,
    length: getL,
    area: getS,
    };

console.log(circle1.length());
console.log(circle1.area());
console.log(circle2.length());
console.log(circle2.area());

console.log(`При значении радиуса окружности ${r1}, длина ее составит - `, `${circle1.length()}`,`, а площадь - ${circle1.area()}.`);
console.log(`При значении радиуса окружности ${r2}, длина ее составит - `, `${circle2.length()}`,`, а площадь - ${circle2.area()}.`);

//* Задание 8 *//
function game() {
    let mN = Number(prompt(`Введите номер месяца`));
    if (mN >= 1 && mN <= 2 || mN === 12 ) {return console.log(`Это зима`);} 
    else if (mN >= 3 && mN <= 5 ) {return console.log(`Это весна`);}
    else if (mN >= 6 && mN <= 8 ) {return console.log(`Это лето`);}
    else if (mN >= 9 && mN <= 11 ) {return console.log(`Это осень`);}
    else if (isNaN(mN) === true ) {return console.log(`Ты втираешь мне какую-то ДИЧЬ!!!`);}   
}