/*
const array = new Array()
console.log(array)
console.log(array.length)

const avaliable = new Array(10)
console.log(avaliable)
console.log(avaliable.length)
*/
/*
let fruits = ['Apple', 'Banana', 'Orange', 'Watermelon']
console.log(fruits);
console.log(fruits.length);

console.log(fruits[1]);

console.log(fruits[fruits.length - 1]);
*/
/*
let fullName = "Lucas Malheiros Sobrenome"

console.log(fullName.split(" "));

console.log(Array.from(fullName));
*/
/*
let users = []
users.push("Lucas")
users.push("Arthur")
users.push("Ana")
console.log(users);
//adiciona um item ao inicio do array
users.unshift("Leticia")
console.log(users);
users.shift()
console.log(users);
users.pop()
console.log(users);
*/
/*
let fruits = ['Apple', 'Watermelon', 'Lemon', 'Strawberry']
let position = fruits.indexOf("Lemon")
console.log(position);

// fruits.splice(1, 1)
// Remove um item pela posição do indice
fruits[0].splice(position, 1)
console.log(fruits);
*/
/*
let myArray = [
    "Um texto",
    10,
    true,
    function () {
        console.log("Função dentro do Array!")
    },
    {
        name: "Lucas",
        email: "lucas@email.com"
    }
]

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

myArray[3]()
console.log(myArray);

console.log(myArray[4].name, myArray[4].email);
*/

let fruits = ['Apple', 'Orange', 'Banana']

console.log(fruits.includes("Apple"));
console.log(fruits.includes("Lemon"));
