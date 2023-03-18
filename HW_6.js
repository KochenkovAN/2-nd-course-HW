//* Задание 1 *//
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] == 10) break;
	console.log(arr[i]);}

//* Задание 2 *//
const arr = [1, 5, 4, 10, 0, 3];
console.log(arr.indexOf(4));
console.log(`Позиция числа 4 в массиве - ${arr.indexOf(4)}`);

//* Задание 3 *//
let arr = [1, 3, 5, 10, 20];
arr = arr.join(' ')
console.log(arr);

//* Задание 4 *//
let arr = [];//создаем пустой массив
for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем пустой подмассив вида [[], [], [],]

    for (let j = 0; j < 3; j++) {
		arr[i].push(j + 1); // заполняем подмассив числами
	}
}
console.log(arr);

//* Задание 5 *//
let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

//* Задание 6 *//
let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
console.log(arr);// получили масиив отсортированный по Unicode [5, 6, 7, 8, 9, 'a']
arr.pop();//удаляем последний элемент из массива arr
console.log(arr);

//через filter()
let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
let result = arr.filter(item => (isNaN(item) === false));// удалить то что не является числом
console.log(result);

//* Задание 7 *//
let arr = [9, 8, 7, 6, 5];
search = arr.includes(Number(prompt(`Введите число от 0 до 10`)));
if (search === true) {console.log(`Есть такое число`);}
else if(search === false) {console.log(`Нет такого числа`);}

//* Задание 8 *//
let str = 'abcdef';
a = str.split('');//получили массив ['a', 'b', 'c', 'd', 'e', 'f']
b = a.reverse(); // развернули массив задом-на-перед ['f', 'e', 'd', 'c', 'b', 'a']
c = b.join('');// собрали массив ['f', 'e', 'd', 'c', 'b', 'a'] в строку 'fedcba'
console.log(c);

//* Задание 9 *//
let arr = [[1, 2, 3,], [4, 5, 6]];
let newArr = [...arr[0], ...arr[1]];//объединение массивов через оператор spread
console.log(newArr);

// через оператор concat
let arr = [[1, 2, 3,], [4, 5, 6]];
let newArr = [].concat(arr[0], arr[1]);//объединить два массива в один
console.log(newArr);

//* Задание 10 *//
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length - 1; i++) {//arr.lenght-1 - это потому что 10 элементов, но отсчет ведется с 0 (те с 0 до 9)
    if (i < arr.length) {console.log(arr[i] + arr[i + 1]);
    } else if (i === arr.length) {console.log(arr[i]);}
}

//* Задание 11 *//
let arr = [9, 8, 7, 6, 5];
let result = arr.map(item => item ** 2);
console.log(result);//[81, 64, 49, 36, 25]

//* Задание 12 *//
let getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
let newGetLengthWords = getLengthWords.map(item => item.length);
console.log(newGetLengthWords);//[5, 0, 4, 19, 5]

//* Задание 13 *//
let arr = [-10, 5, -6, 9, 8, -3, 7, 6, -100, -2, 5];//произвольный массив чисел
let result = arr.filter(item => item < 0);
console.log(result);

//* Задание 14 *//
let arr = [];//создаем пустой массив
let min = 0;
let max = 10;
let count = 10;//длинна массива

for ( let i = min; i < count; ++i ) {
    arr.push( Math.round(Math.random() * max) );//Math.round - округление до ближайшего целого
                                                //Math.random - возвращает случайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
}

let arrNew = arr.filter(item => ((item % 2) === 0));//оставляем только четные элементы массива
console.log(arr);//рандомный массив из 10 элементов
console.log(arrNew);//рандомный массив, только с четными элементами
