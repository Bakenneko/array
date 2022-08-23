// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle (a,b) {
//     return a*b;
// }
// console.log(rectangle(35, 40));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circus (r) {
//     return  Math.PI * Math.pow(r,2);
// }
// console.log(circus(13));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//     function cylinder (r,h) {
//         return (h + r) * 2 * Math.PI * r;
//     }
// console.log(cylinder(11,6));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [23,45,121,56,76];
// function foo(arr) {
//     console.log(arr);
// }
// foo(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function foo(text) {
//     document.write(`<p> ${text} </p>`)
// }
// foo('Hi, there')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo (text) {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// }
// foo('Viva');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function foo(text, count) {
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// foo('Minion',4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1,'hello', true];
// function foo(arr){
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ul>`)
// }
// foo(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let array = [
//     {
//         id: 1,
//         name: 'Andr',
//         age: 33,
//     },
//     {
//         id: 2,
//         name: 'Vita',
//         age: 25,
//     },
//     {
//         id: 3,
//         name: 'Cook',
//         age: 25,
//     },
//
// ]
// function foo(arr){
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} -- ${arrElement.name} -- ${arrElement.age}</div>`)
//     }
// }
// foo(array);

// - створити функцію яка повертає найменьше число з масиву
// let array = [123,234,788,700,111];
// function foo(arr) {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     return min;
// }
// console.log(foo(array));

// const arr = [-11, 5, 2, -12, 45];
//
// const findMin = (array) => {
//
//         let min = array[0]
//         for (let item of array) {
//             if (min > item) {
//                 min = item
//             }
//         }
//         return min
//     }
//
//     console.log(findMin(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [4,5,6,7,8];
// function foo(arr){
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(foo(array));