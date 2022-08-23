// - Знайти та вивести довижину наступних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let s = str.trim(); забирає всі пробіли чистить стрінгу
// console.log(s);
// let str = ' dirty string   ';
// let s = str.trimStart(); З лівої сторони забирає пробіли з правої незабирає.
// console.log(s);
// let str = ' dirty string   ';
// let s = str.trimEnd(); З кінця забирає пробіли з початку ні.
// console.log(s);

// - Напишіть функцію string_array(str), яка перетворює рядок на масив слів let str = 'Ревуть воли як ясла повні';
// let str = 'Ревуть воли як ясла повні';
// const stringToArray = (str) => str.split(' ');
// console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let array = [10,8,-7,55,987,-1011,0,1050,0];
// let strings = array.map(value => value.toString());
// console.log(strings);

// -створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меньшого,
// aбо навпаки в залежності від значення аргументу direction. let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// const sortNums = (direction,arr) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b);
//     } else if (direction === 'descending'){
//         arr.sort((a, b) => b - a);
//     }
//     return arr;
// }
//
// console.log(sortNums('ascending', nums));
// console.log(sortNums('descending', nums));

// є масив - відсортувати його за спаданням за monthDuration,
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((a, b) =>
//     b.monthDuration - a.monthDuration));;
// // відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);

// описати колоду карт // {cardSuit: '', // 'spade', 'diamond','heart', 'clubs' value: '', // '6'-'10', 'ace','jack','queen','king','joker' color:'', // 'red','black'}
// let deckOfCards = [
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'black'
//     },
//     {
//         cardSuit: null,
//         value: 'Joker',
//         color: 'red'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'spade',
//         value: '6',
//         color: 'black'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'diamond',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'king',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'queen',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: 'jack',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '10',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '9',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '8',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '7',
//         color: 'red'
//     },
//     {
//         cardSuit: 'heart',
//         value: '6',
//         color: 'red'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'king',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'queen',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'jack',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '10',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '9',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '8',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '7',
//         color: 'black'
//     },
//     {
//         cardSuit: 'clubs',
//         value: '6',
//         color: 'black'
//     },
// ]

// знайти піковий туз
// let find = deckOfCards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(find);

// всі шістки
// let filter = deckOfCards.filter(value => value.value === '6');
// console.log(filter);

// всі червоні карти
// let filter = deckOfCards.filter(value => value.color === 'red');
// console.log(filter);

// всі буби
// let filter = deckOfCards.filter(value => value.cardSuit === 'diamond');
// console.log(filter);

// всі трефи від 9 та більше
// let filter = deckOfCards.filter(value => value.cardSuit === 'clubs' && value.value > '8' || value.value === '10' &&
//     value.cardSuit === 'clubs' || value.value === 'Joker' && value.color === 'black');
// console.log(filter);

// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

// let reduce = deckOfCards.reduce((accum, card) => {
//     if (card.cardSuit === 'spade') {
//         accum.spades.push(card);
//     } else if (card.cardSuit === 'diamond') {
//         accum.diamond.push(card);
//     } else if (card.cardSuit === 'heart') {
//         accum.heart.push(card);
//     } else if (card.cardSuit === 'clubs') {
//         accum.clubs.push(card);
//     } else {
//         accum.joker.push(card);
//     }
//     return accum;
//  },{
//     spades:[],
//     diamond:[],
//     heart:[],
//     clubs:[],
//     joker:[]
//     }
// )
// console.log(reduce);

