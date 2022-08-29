// 4 На странице user-details.html: Вивести всю, без виключення,
// інформацію про об'єкт user на який клікнули

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} - ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `user-details.html?id=${user.id}&asd=${JSON.stringify(user)}`;
//             a.innerText = ' user-details'
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
//     });