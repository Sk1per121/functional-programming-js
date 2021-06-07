////====  Фильтрация массивов и метод filter()  ====\\\\
console.log("----Фильтрация массивов и метод filter()----");
//=== Отфильтровать массив целых чисел, выведя лишь те его элементы, которые меньше заданного значения x ===\\
console.log("\nОтфильтровать массив целых чисел, выведя лишь те его элементы, которые меньше заданного значения x");

//Исходные данные
let numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];

//Императивный подход
let filterArray = function(x, coll) {
    let resultArray = [];

    for (let i = 0; i < coll.length; i++) {
        if (coll[i] < x) {
            resultArray.push(coll[i]);
        }
    }

    return resultArray;
}
console.log("Императивный подход: " + filterArray(3, numbers));


//Декларативнй подход
function smaller(number) {
    return number < this;
}

function filter_array(x, listOfNumbers) {
    return listOfNumbers.filter(smaller, x);
}
console.log("Декларативный подход: " + filter_array(3, numbers));




////====  Обработка элементов массивов и метод map()  ====\\\\
console.log("\n\n----Обработка элементов массивов и метод map()----");
//=== Формирование списка строк на основе объекта people ===\\
console.log("\nФормирование списка строк на основе объекта people");

//Исходные данные
let people = [
    { name: "TK", age: 26 },
    { name: "Kaio", age: 10 },
    { name: "Kazumi", age: 30 }
];

//Императивный подход
let arrPeopleSentences = [];

for (let i = 0; i < people.length; i++) {
    let sentence = people[i].name + " is " + people[i].age + " years old";
    arrPeopleSentences.push(sentence);
}
console.log("Императивный подход: " + arrPeopleSentences);


//Декларативнй подход
function makeSentence(person) {
    return `${person.name} is ${person.age} years old`;
}

function peopleSentences(people) {
    return people.map(makeSentence);
}
console.log("Декларативный подход: " + peopleSentences(people));




//=== Замена элементов числового массива на их абсолютные значения ===\\
console.log("\nЗамена элементов числового массива на их абсолютные значения");

//Исходные данные
let values = [1, 2, 3, -4, 5];

//Императивный подход
for (let i = 0; i < values.length; i++) {
    values[i] = Math.abs(values[i]);
}
console.log("Императивный подход: " + values);


//Декларативный подход
function updateListMap(values) {
    return values.map(Math.abs);
}
console.log("Декларативный подход: " + updateListMap(values));




////====  Преобразование массивов и метод reduce()  ====\\\\
console.log("\n\n----Преобразование массивов и метод reduce()----");
//=== Поиск общей суммы по некоемому заказу ===\\
console.log("\nПоиск общей суммы по некоемому заказу");

//Исходные данные
let orders = [
    { productTitle: "Product 1", amount: 10 },
    { productTitle: "Product 2", amount: 30 },
    { productTitle: "Product 3", amount: 20 },
    { productTitle: "Product 4", amount: 60 }
];

//Императивный подход
let totalAmount = 0;

for (let i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}
console.log("Императивный подход: " + totalAmount);


//Декларативный подход
const sumAmount1 = (currentTotalAmount, order) => currentTotalAmount + order.amount;

function getTotalAmount1(shoppingCart) {
    return shoppingCart.reduce(sumAmount1, 0);
}
console.log("Декларативный подход: " + getTotalAmount1(orders));


//Комбинирование map() и reduce()
const get_amount = (order) => order.amount;
const sum_amount = (acc, amount) => acc + amount;

function get_total_amount(shoppingCart) {
    return shoppingCart
        .map(get_amount)
        .reduce(sum_amount, 0);
}
console.log("Декларативный подход (комбо map+reduce): " + get_total_amount(orders));




////====  Совместное использование методов filter(), map() и reduce()  ====\\\\
console.log("\n\n----Совместное использование методов filter(), map() и reduce()----");
//=== Поиск стоимости книг в заказе ===\\
console.log("\nПоиск стоимости книг в заказе");

//Исходные данные
let shoppingCart = [
    { productTitle: "Functional Programming", type: "books", amount: 10 },
    { productTitle: "Kindle", type: "eletronics", amount: 30 },
    { productTitle: "Shoes", type: "fashion", amount: 20 },
    { productTitle: "Clean Code", type: "books", amount: 60 }
];

const byBooks = (order) => order.type === "books";
const getAmount = (order) => order.amount;
const sumAmount = (acc, amount) => acc + amount;

function getTotalAmount(shoppingCart) {
    return shoppingCart
        .filter(byBooks)
        .map(getAmount)
        .reduce(sumAmount, 0);
}

console.log("Декларативный подход (комбо filter+map+reduce): " + getTotalAmount(shoppingCart));






////====  Примеры работы с массивами  ====\\\\
console.log("\n\n----Примеры работы с массивами----");


//=== Удаление дубликатов из массива числе/строк ===\\

let arr = [3, 1, 3, 5, 2, 4, 4, 4];
let uniqueArr = [...new Set(arr)];

console.log("\nУдаление дубликатов из массива числе/строк: " + uniqueArr);



//=== Простой поиск (чувствительный к регистру) ===\\

let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let res = users.filter(it => it.name.includes('oli'));

console.log("\nПростой поиск (чувствительный к регистру):");
console.log(res); //Не выдаст ничего



//=== Простой поиск (не чувствительный к регистру) ===\\

let res1 = users.filter(it => new RegExp('oli', "i").test(it.name));

console.log("\nПростой поиск (не чувствительный к регистру):");
console.log(res1);



//=== Проверка есть ли у пользователей права администратора ===\\

let hasAdmin = users.some(user => user.group === 'admin');

console.log("\nПроверка есть ли у пользователей права администратора: " + hasAdmin);



//=== Сглаживание массива массивов ===\\

let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);

console.log("\nСглаживание массива массивов: " + flat);



//=== Создание объекта, который содержит частоту использования ключей ===\\

let users1 = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let groupByAge = users1.reduce((acc, it) =>
        ({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),
    {});

console.log("\nСоздание объекта, который содержит частоту использования ключей:");
console.log(groupByAge);



//=== Индексирование массива объектов (таблица соответствий) ===\\

let users2 = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let uTable = users2.reduce((acc, it) => ({...acc, [it.id]: it }), {})

console.log("\nИндексирование массива объектов (таблица соответствий):");
console.log(uTable);



//=== Извлечение уникальных значений для определенного ключа для каждого элемента в массиве ===\\

let users3 = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let listOfUserGroups = [...new Set(users3.map(it => it.group))];

console.log("\nИзвлечение уникальных значений для определенного ключа для каждого элемента в массиве: " + listOfUserGroups);



//=== Обратное мапирование объекта типа ключ/значение ===\\

let cities = {
    Lyon: 'France',
    Berlin: 'Germany',
    Paris: 'France'
};
let countries = Object.keys(cities).reduce(
    (acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc) , {});

//Более читаемый вариант, аналог предыдущего
/*
let countries = Object.keys(cities).reduce((acc, k) => {
  let country = cities[k];
  acc[country] = [...(acc[country] || []), k];
  return acc;
}, {});
 */

console.log("\nОбратное мапирование объекта типа ключ/значение:");
console.log(countries);



//=== Создание массива значений Фаренгейта из массива значений Цельсия ===\\

let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
let fahrenheit = celsius.map(t => t * 1.8 + 32);

console.log("\nСоздание массива значений Фаренгейта из массива значений Цельсия: " + fahrenheit);



//=== Кодировать объекта в строку запроса ===\\

let params = {lat: 45, lng: 6, alt: 1000};
let queryString = Object.entries(params).map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&');

console.log("\nКодировать объекта в строку запроса: " + queryString);



//=== Отображение таблицы пользователей в виде читаемой строки только с указанными ключами ===\\

let users4 = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let r = users4.map(({id, age, group}) => `\n${id} ${age} ${group}`).join('');

console.log("\nОтображение таблицы пользователей в виде читаемой строки только с указанными ключами:");
console.log(r);



//=== Поиск и замена пары ключ-значение в массиве объектов ===\\

let users5 = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let updatedUsers = users5.map(
    p => p.id !== 47 ? p : {...p, age: p.age + 1}
);

console.log("\nПоиск и замена пары ключ-значение в массиве объектов:");
console.log(updatedUsers);



//=== Объединение (A ∪ B) массивов ===\\

let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
let arrRes = [...new Set([...arrA, ...arrB])];

console.log("\nОбъединение (A ∪ B) массивов: " + arrRes);



//=== Поиск пересечений в массивах (A ∩ B) ===\\

let arrC = [1, 4, 3, 2];
let arrD = [5, 2, 6, 7, 1];
let arrResult = arrC.filter(it => arrD.includes(it));

console.log("\nПоиск пересечений в массивах (A ∩ B): " + arrResult);

