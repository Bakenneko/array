// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} - ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `post of current user.html?id=${user.id}`;
//             a.innerText = ' post of current user'
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
//     });