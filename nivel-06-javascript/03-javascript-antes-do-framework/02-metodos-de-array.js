/* aula 1, método map
const products = ["Teclado", "Mouse", "Monitor"]

products.map((product) => {
    console.log(product)
})
console.log("---Segundo método---");

products.map((product) => console.log(product))
console.log("---Terceiro método---");

const formatted = products.map((product) => {
    // return product.toUpperCase()
    return ({
        id: Math.random(),
        description: product,
    })
})
console.log(formatted)
*/

/* aula 2, método filter

const words = ["Javascript", "HTML", "CSS", "Web"]
const result = words.filter((word) => word.length > 3)
console.log(result)

const products = [
    { description: "Teclado", price: 150, promotion: true },
    { description: "Mouse", price: 70, promotion: false },
    { description: "Monitor', price: 900", promotion: true }
]

const promotion = products.filter((product) => product.promotion === true)
console.log(promotion)
*/
/* Aula 03, método find index

const values = [4, 6, 8, 12]
const index = values.findIndex((value) => value > 4)
console.log(index)
console.log(values[index])

console.log(values.findIndex((value) => value > 12));
*/

/* 04 Método Find

const values = [5, 12, 8, 130, 44]
const found = values.find((value) => value > 10)
console.log(found)

const fruits = [
    {
        name: "apples", quantity: 23
    }, {
        name: "bananas", quantity: 25
    }, {
        name: "oranges", quantity: 52
    },
]

const result = fruits.find((fruit) => fruit.name === "bananas")
console.log(result)
*/
/* aula 05 método every 

const ages = [15, 30, 39, 29]

const result = ages.every((age =>
    age >= 18
))
console.log(result)
*/
/* Aula 6 método some
const ages = [15, 30, 39, 29]

const result = ages.some((age =>
    age <= 18
))
console.log(result)
*/
/* Aula 6 método reduce 
*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
    /*
    console.log("Acumulador: ", accumulator)
    console.log("Valor atual: ", currentValue)
    console.log("Índice: ", index)

    console.log("Soma: ", accumulator + currentValue)
    console.log("###########")
    */
    return accumulator + currentValue
}, 0)

console.log("Resultado da soma final: ", sum);
