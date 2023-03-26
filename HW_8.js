//* Задание 1 *//
function getResult (arr, multi) {
    const result = arr.reduce(multi);
    console.log(result);
}

function multi(a, b) {
    return a * b;
};

function sum(a, b){
    return a + b;
}

getResult ([3, 4, 1, 9], multi);
getResult ([3, 4, 1, 9], sum);

//* Задание 2 *//
function compareFunction(a, b) {
	return a - b;
}

function compareUser(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}

function sort(arr, compareFunction) {
    for (let i = 0; i < arr.length; i++) {
				for (let j = i; j < arr.length; j++) {						
						const condition = compareFunction 
                            ? compareFunction(arr[i], arr[j]) > 0 : arr[i].toString() > arr[j].toString(); 
						if (condition) {let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
            }
        }
    }
    return arr;
}

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
users.sort(compareUser); 
console.log(users);

//* Задание 3 *//
function each(arr, reversArr) {
    let result = arr.reverse();
    console.log(result);
}

function reversArr(){
    return arr.reverse();
}

each([1, '4', 9, 'two'], reversArr);

function each2(arr, toNumberArr) {
    let result = (arr.map(Number)).filter(el => isNaN(el) === false);
    console.log(result);
}

function toNumberArr(){
    return (arr.map(Number)).filter(el => isNaN(el) === false);
}

each2([1, '4', 9, 'two'], toNumberArr);

//* Задание 4 *//
const timer = (deadline) => {
    let time = deadline;
    const interval = setInterval(() => {
        time -= 1;
        console.log(new Date());
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, deadline * 1000)
};

const deadline = 30;
timer(deadline);

//* Задание 5 *//
function calling() {
    console.log('Звоню!');
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);