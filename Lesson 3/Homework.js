// - Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 10;
if (x !== 0) {
    console.log('Вірно');
}else { console.log('Невірно');
}

let y = 1;
if (y !== 0) {
    console.log('Вірно');
}else { console.log('Невірно');
}

let a = 0;
if (a !== 0) {
    console.log('Вірно');
} else { console.log('Невірно');
}

let b = -3;
if (b !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = +prompt ('Введіть число');

if (time >= 0 && time <= 15){
    console.log('Перша чверть');
} else if (time >= 15 && time <= 30){
    console.log('Друга чверть');
} else if (time >= 30 && time <= 45) {
    console.log('Третя чверть');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта чверть');
} else {
    console.log('Невірно введено дані');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let month = +prompt ('Введіть число');

if (month >= 1 && month <= 10){
    console.log('Перша декада');
} else if (month >= 11 && month <= 20){
    console.log('Друга декада');
} else if (month >21 && month <= 31) {
    console.log('Третя декада');
} else {
    console.log('Невірно введено дані');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).


let weekday = prompt ('Введіть номер дня тижня');
switch (weekday) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
   case '3':
       console.log('Wednesday');
       break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('Немає такого')
        
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let one = +prompt("введіть число");
let two = +prompt("введіть число");

if (one > two) {
    console.log(one + " більше за " + two);
} else if (two > one) {
    console.log(two + " більше за " + one);
} else if (one === two && one > 0 || two > 0 && one < 0 || two > 0) {
    console.log("числа рівні");
}

//  є змінна х, яка може прийняти будь-яке значення (стрінг, число, , null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let r = 0;
if (r === ' ' || r === undefined || r=== null){
    console.log( r = 'default');
}else {
    console.log( r = 'falsy');
}
