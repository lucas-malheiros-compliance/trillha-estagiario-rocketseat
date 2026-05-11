/* aula 1 Strict mode
"use strict"
function showMessage() {
    // personName = "Lucas M"
    let personName = "Lucas M"
    console.log(`Olá, ${personName}`);
}
showMessage()

class Student {
    get point() {
        return 7
    }
}

let student = new Student()

// student.point = 10
console.log(student.point)

// delete window.document

// function sum(a, a, c) {
// return a + a + c
function sum(a, b, c) {
    return a + b + c
}
console.log(`Resultado: ${sum(1, 3, 2)}`);
*/
/* aulas 2 desestruturação de array
const data = ["Lucas M", "lucas@email.com"]

const [username, email] = data
console.log(`Nome: ${username}`)
console.log(`Email: ${email}`)

const fruits = ["Banana", "Apple", "Orange"]

const [primeiroItem] = fruits

console.log(primeiroItem)

const [_, segundoItem] = fruits
console.log(segundoItem)

const [, , terceiroItem] = fruits
console.log(terceiroItem)
*/
/* aula 03 desestruturação de objetos
const product = {
    description: "Teclado",
    price: 150
}

const { description, price } = product
console.log(`Descrição: ${description}`)
console.log(`Preço: R$${price}`)

// function newProduct(description, price) {
function newProduct({ description, price }) {
    console.log(`--- NOVO PRODUTO ---`)

    console.log(`Descrição: ${description}`)
    console.log(`Preço: R$${price}`)
}

// newProduct("Mouse", 70)
newProduct({ price: 70, description: "Mouse" })
*/
/* aula 04 Rest Params
function values(a, ...rest) {
    console.log(a)
    console.log(...rest)
}

values(2, 1, 3, 4)
values(5)
*/
/* Aula 04 Spread Operator
*/

const numbers = [1, 2, 3]
console.log(numbers)
console.log(...numbers)

const data = [
    { name: "Lucas", email: "lucas@email.com", avatar: "l.png" }, { name: "Ana", email: "ana@email.com", avatar: "a.png" }, { name: "Arthur", email: "arthur@email.com", avatar: "ar.png" }]


console.log(data)
console.log(...data)