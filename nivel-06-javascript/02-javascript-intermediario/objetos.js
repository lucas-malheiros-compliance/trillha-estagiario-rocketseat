/*
const obj = {}

console.log(obj);
console.log(typeof obj);

const user = {
    email: "lucas@email.com",
    age: 28,
    name: {
        first_name: "Lucas",
        surname: "M"
    },
    address: {
        street: "Rua X",
        number: 101,
        city: "Ribeirão Preto",
        postal_code: "12345-678"
    },
    // Arrow function ()=>{} não permite utilizar função this, então faz-se necessário criar a function(){}
    message: function () {
        console.log(`Olá, ${this.name.first_name}`);
    }
}
console.log(user.email);
console.log(user.name.first_name);

user.message()

console.log(user["email"]);
console.log(user["name"]["first_name"], user["name"]["surname"]);

user["message"]()
*/
/*
const user = {
    name: "Lucas",
    message: function () {
        console.log(`Olá, ${this.name}`);
    }
}

user.message()
*/
/*
const product = {
    name: "Teclado",
    quantity: 100
}
console.log(product.name);

console.log(product.quantity);
product.quantity = 90
console.log(product.quantity);

product.name = "Mouse"
console.log(product.name);

product["quantity"] = 50
console.log(product);
*/
/*
const user = {
    id: 1,
    name: "Lucas",

    // address: {
    //     street: "Avenida Brasil",
    //     city: "Ribeirão Preto",
    //     geo: {
    //         latitude: 47.808,
    //         longitude: 17.5674
    //     },
    // },

    // message: function () {
    //     console.log(`Olá, ${this.name}`);
    // },

}

console.log(user);
user.message?.()
console.log(user?.address);

console.log(user?.address?.street);
*/
/*
let content = null

console.log(content ?? "Conteúdo padrão");

content = "Conteúdo alterado"
console.log(content ?? 'Conteúdo padrão');

const user = {
    name: "Lucas",
    avatar: undefined
}

console.log(user.avatar ?? "default.png");
*/

function createProduct(name) {
    const product = {}

    product.name = name
    product.details = function () {
        console.log(`O nome do produto é ${this.name}`)
    }
    return product
}

const product1 = new createProduct("teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("mouse")
console.log(product2.name);
product2.details()

console.log(product1 === product2);

// exemplos de funções construtoras disponiveis direto no js
let myName = new String("Lucas")
console.log(myName)

let price = "40.6".replace(".", ",")
console.log(price)

let date = new Date("2026-5-5")
console.log(date);

function Person(name) {
    this.name = name,
        this.message = function () {
            console.log(`Olá, ${this.name}`);
        }
}

const person1 = new Person("Lucas")
console.log(person1.name)
person1.message()
const person2 = new Person("Arthur")
console.log(person2.name)
person2.message()