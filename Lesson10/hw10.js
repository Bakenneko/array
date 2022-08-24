// 1. В index.html отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users

// fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(response => response.json())
// //     .then(json => console.log(json));

// 2. Вивести id,name всіх user в index.html. Окремий блок для кожного user.

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} - ${user.name}`;
//             document.body.appendChild(div);
//         }
//     });

// 3. Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули.

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} - ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `post_details.html?id=${user.id}`;
//             a.innerText = ' user_details'
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
//     });

// 4 На странице user-details.html: Вивести всю, без виключення, інформацію про об'єкт user на який клікнули

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} - ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `post_details.html?id=${user.id}&asd=${JSON.stringify(user)}`;
//             a.innerText = ' user_details'
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
//     });

// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//    .then(users => {
//         for (const user of users) {
//              let div = document.createElement('div');
//             div.innerText = `${user.id} - ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `post_details.html?id=${user.id}`;
//             a.innerText = ' user_details'
//            div.appendChild(a);
//            document.body.appendChild(div);
//          }
//      });

// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} - ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `post_details.html?id=${user.id}`;
//             a.innerText = ' post_details'
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
//     });

// 7 На странице post-details.html: Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} - ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `post_details.html?id=${user.id}&asd=${JSON.stringify(user)}`;
//             a.innerText = ' post_details'
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
//     });

// 8 В нижче інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// Стилизація проєкта - index.html - всі блоки з user - по 2 в рядок. кнопки/посилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 . post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд.)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} - ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `post_details.html?id=${user.id}`;
//             a.innerText = ' post_details'
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
//     });
