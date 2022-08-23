// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone.
// Cтворити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let array = [];
// array[0] = new User(1,'James','Aaron','J@gmail.com',7604746144);
// array[1] = new User(2,'Robert','Aaron','J@gmail.com',7814735881);
// array[2] = new User(3,'John','Abarough','J@gmail.com',9565743317);
// array[3] = new User(4,'Mary','Abbey','J@gmail.com',9013806333);
// array[4] = new User(5,'Patricia','Aaron','J@gmail.com',9037777327);
// array[5] = new User(6,'Jennifer','Abney','J@gmail.com',2122324011);
// array[6] = new User(7,'Richard','Abbot','J@gmail.com',8436399145);
// array[7] = new User(8,'Joseph','Abbott','J@gmail.com',4092399872);
// array[8] = new User(9,'Christopher','Abney','J@gmail.com',8183886499);
// array[9] = new User(10,'Daniel','Abrams','J@gmail.com',7243296842);
// console.log(array);

// let array = [];
// let user1 = new User(1,'James','Aaron','J@gmail.com',7604746144);
// let user2 = new User(2,'Robert','Aaron','J@gmail.com',7814735881);
// let user3 = new User(3,'John','Abarough','J@gmail.com',9565743317);
// let user4 = new User(4,'Mary','Abbey','J@gmail.com',9013806333);
// let user5 = new User(5,'Patricia','Aaron','J@gmail.com',9037777327);
// let user6 = new User(6,'Jennifer','Abney','J@gmail.com',2122324011);
// let user7 = new User(7,'Richard','Abbot','J@gmail.com',8436399145);
// let user8 = new User(8,'Joseph','Abbott','J@gmail.com',4092399872);
// let user9 = new User(9,'Christopher','Abney','J@gmail.com',8183886499);
// let user10 = new User(10,'Daniel','Abrams','J@gmail.com',7243296842);
// array.push (user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
// console.log(array);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// function User (id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let array = [];
// array[0] = new User(1,'James','Aaron','J@gmail.com',7604746144);
// array[1] = new User(2,'Robert','Aaron','J@gmail.com',7814735881);
// array[2] = new User(3,'John','Abarough','J@gmail.com',9565743317);
// array[3] = new User(4,'Mary','Abbey','J@gmail.com',9013806333);
// array[4] = new User(5,'Patricia','Aaron','J@gmail.com',9037777327);
// array[5] = new User(6,'Jennifer','Abney','J@gmail.com',2122324011);
// array[6] = new User(7,'Richard','Abbot','J@gmail.com',8436399145);
// array[7] = new User(8,'Joseph','Abbott','J@gmail.com',4092399872);
// array[8] = new User(9,'Christopher','Abney','J@gmail.com',8183886499);
// array[9] = new User(10,'Daniel','Abrams','J@gmail.com',7243296842);
// console.log(array);
// let filtered = array.filter(value => value.id % 2 === 0);
// console.log(filtered);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// function User (id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let array = [];
// array[0] = new User(40,'James','Aaron','J@gmail.com',7604746144);
// array[1] = new User(56,'Robert','Aaron','J@gmail.com',7814735881);
// array[2] = new User(9,'John','Abarough','J@gmail.com',9565743317);
// array[3] = new User(7,'Mary','Abbey','J@gmail.com',9013806333);
// array[4] = new User(13,'Patricia','Aaron','J@gmail.com',9037777327);
// array[5] = new User(22,'Jennifer','Abney','J@gmail.com',2122324011);
// array[6] = new User(57,'Richard','Abbot','J@gmail.com',8436399145);
// array[7] = new User(19,'Joseph','Abbott','J@gmail.com',4092399872);
// array[8] = new User(78,'Christopher','Abney','J@gmail.com',8183886499);
// array[9] = new User(1,'Daniel','Abrams','J@gmail.com',7243296842);
// console.log(array);
// let sort = array.sort((a, b) => {
//     return a.id - b.id;
// });
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class User {
//     constructor(id,name,surName,email,phone,order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surName;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let array = [];
//
// let user1 = new User(1,'James','Aaron','J@gmail.com',7604746144,[12,13,14,1,13,4]);
// let user2 = new User(2,'Robert','Aaron','J@gmail.com',7814735881,[32,1,2,9,1]);
// let user3 = new User(3,'John','Abarough','J@gmail.com',9565743317,[37,34,43,9,8]);
// let user4 = new User(4,'Mary','Abbey','J@gmail.com',9013806333,[8,0,1]);
// let user5 = new User(5,'Patricia','Aaron','J@gmail.com',9037777327,[6,9,1,15]);
// let user6 = new User(6,'Jennifer','Abney','J@gmail.com',2122324011,[78,9,12]);
// let user7 = new User(7,'Richard','Abbot','J@gmail.com',8436399145,[43,78,21]);
// let user8 = new User(8,'Joseph','Abbott','J@gmail.com',4092399872,[98,12,22]);
// let user9 = new User(9,'Christopher','Abney','J@gmail.com',8183886499,[97,11,23]);
// let user10 = new User(10,'Daniel','Abrams','J@gmail.com',7243296842,[21,33,44]);
//
// array.push (user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
//
// let sort = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку