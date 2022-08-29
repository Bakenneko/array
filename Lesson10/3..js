// 3. Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули.

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} - ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `user-details.html?id=${user.id}`;
//             a.innerText = ' user-details'
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
//     });
