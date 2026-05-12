/*const address1 = { street: "Av. Brasil", number: 20 }

// passando por referência
// const address2 = address1

//criando um novo objeto
// const address2 = { ...address1 }
// address2.number = 30
8
const address2 = { ...address1, number: 30 }


console.log(`Endereço 1: ${address1.number}, Endereço 2: ${address2.number}`);


const list1 = ["Apple", "Banana"]
// const list2 = list1
// const list2 = [...list1]
// console.log(list1, list2);
// list2.push("Watermelon")
const list2 = [...list1, "Watermelon"]

console.log(list1, list2);
*/

/*
const htmlCourse = {
    course: "HTML",
    students: [{ name: "Lucas", email: "lucas@emailcom" }],
}

// const jsCourse = {
//     ...htmlCourse,
//     course: "Javascript",
// }

// console.log(htmlCourse, jsCourse);

// vai modificar htmlcourse também pois students é passado por referência devido à shallow copy
// jsCourse.students.push({ name: "João", email: "joao@email.com" })

//pra solucinar isso, é utilizado deep copy
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    students: [...htmlCourse.students, { nome: "João", email: "joao@email.com" }]
}
jsCourse.students.push({ nome: "Arthur", email: "email@emaol.com" })

// const jsCourse = {
//     ...htmlCourse,
//     course:"Javascript",
// }
// jsCourse.students=[...htmlCourse, {name:"João", email:"joao@email.com"}]

console.log(htmlCourse, jsCourse);
*/

const book = {
    title: "Objetos imutáveis",
    category: "javascript",
    author: {
        nome: "Lucas", email: "lucas@email.com"
    },
}

// Object.freeze(book)

// //não modifica, mesmo em shallow freeze
// book.category = "HTML"

// // é possível alterar objetos aninhados em shallow freeze
// book.author.nome = "Arthur"

// console.log(book)

// function deepFreeze(object) {
//     const props = Reflect.ownKeys(object)
//     // console.log(props);

//     for (const prop of props) {
//         const value = object[prop]
//         // console.log(value);

//         if (value && (typeof value === "object" || typeof value === "function")) {
//             deepFreeze(value)
//         }

//     }
//     return Object.freeze(object)
// }
// deepFreeze(book);

// book.category = "HTML"
// book.author.nome = "Leão"

// console.log(book)

const updatedBook = {
    ...book,
    title: "Criando um Front-end moderno com HTML",
    category: "html",
    type: "Programming",
}
console.log(book);

console.log(updatedBook);

const { category, ...updatedBook2 } = book
console.log(updatedBook2);
