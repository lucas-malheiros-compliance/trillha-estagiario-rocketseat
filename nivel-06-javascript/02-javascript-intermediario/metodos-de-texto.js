let message = "Estou estudando os fundamentos do Javascript"
/*
console.log(message);

console.log(message.toUpperCase());
console.log(message.toLowerCase());
*/
/*
console.log(message.length);

let password = "12345"

if (password.length < 6) {
    console.log("A senha deve ter ao menos 6 caracteres");
}

let value = 12345
console.log(value);
console.log(value.length);
console.log(String(value).length);
console.log(value.toString().length);
*/
/*
console.log(
    message.replace(
        "os fundamentos do Javascript",
        "Métodos de String"
    )
);

console.log(message.slice(6, 30));
console.log(message.slice(-11));

let textWithSpace = "      Texto de Exemplo    "
console.log(textWithSpace.length);
console.log(textWithSpace.trim());
console.log(textWithSpace.trim().length);
*/
/*
const creditCard = "1234567812344928"
// console.log(creditCard.length);

const lastDigits = creditCard.slice(-4)
// console.log(lastDigits);

const maskedNumber = lastDigits.padStart(creditCard.length - 4, "X")
console.log(maskedNumber);

const number = "123"
console.log(number.padEnd(10, "#"));
*/
/*
let text = "Estudar, Aprender, Praticar"

let separate = text.split(", ")
console.log(separate);

console.log(message.split(" "));

let joined = separate.join(" - ")
console.log(joined);
*/

console.log(message.toLowerCase().indexOf("javascript"));

console.log(message.toLowerCase().includes("javascript"));

console.log(message.includes("html"));

console.log(message.includes("estudando os fundamentos"));
