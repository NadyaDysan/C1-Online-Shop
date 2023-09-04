// 1
let a = 20;
alert(a);
// 2
let firstYear = "09.01.2007";
alert(firstYear);
// 3
let nameJS = "Brendan Eich";
alert(nameJS);
// 4
let number1 = 10;
let number2 = 2;
alert(number1 += number2);
alert(number1 *= number2);
alert(number1 -= number2);
alert(number1 /= number2);
// 5
let a = prompt('Введите переменную a');
let b = prompt('Введите переменную b');
alert(parseInt(a) + parseInt(b));
// 6
let result = 2 ** 5;
alert(result);
// 7
let a = 9;
let b = 2;
alert(a % b);
// 8
let a = '2';
let b = '3';
alert(parseInt(a) + parseInt(b));
// 9
let a = '1';
let b = '2';
alert(`${a}${b}`);
// 10
let a = '5';
let b = '6';
alert(parseInt(a) + parseInt(b) + "px");
// 11
let age = Number(prompt('Сколько вам лет?'));
let result = age += 1;
alert(`Через 1 год Вам будет ${result} лет`);
// 12
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);
// 13
let userName = prompt('Введите как вас зовут?');
alert(`Привет ${userName} !`);
// 14
let salary = Number(prompt('Введите размер годовой зарплаты'));
let result1 = salary *= 0.2;
alert(`Премия в размере 20% = ${result1}`);
let result2 = (result1 + salary) * 0.13;
alert(`Подоходный налог 13% на суммарный доход (зп + премия) ${result2}`);
let result3 = (result1 + salary) * 0.87;
alert(`Доход за вычетом налогов ${result3}`);
let result4 = result3 / 365;
alert(`Бюджет на день ${result4}`);