/*
function message() {
    console.log("Olá, é bom ver você aqui!");
}

message()
*/
/*
let username = "Arthur"
function message(username) {
    console.log(`Olá, ${username}`);

}

message("Lucas")
message("Ana")
console.log(username);
message(username)

function soma(a, b) {
    console.log(a + b);

}

soma(10, 20)
soma(7, 3)

function JuntaTexto(text1, text2 = "", text3 = ".") {
    console.log(text1, text2, text3);
}

JuntaTexto("Lucas", "Malheiros", "Nome")
JuntaTexto("Malheiros", "Nome", "Lucas")

JuntaTexto("Lucas")
*/
/*
function Soma(a, b) {
    let resultado = a + b

    return resultado

}
let resposta = Soma(11, 17)
console.log(resposta);
console.log(Soma(15, 15));
*/
/*
showMessage("Olá, Lucas")
function showMessage(message) {
    console.log(message);
    endLine()

    function endLine() {
        console.log("--------");

    }
}
showMessage("Tudo bem?")
*/
// /**
//  * Authenticates the user
//  *
//  * @param {String} email user email.
//  * @param {String} password more than 6 characters.
//  * @returns {Number} user id
//  */
// function signIn(email, password) {
//     // Todo o fluxo e autenticação do usuário

//     return 7
// }

// signIn("lucas@email.com", "123456")
/*
const showMessage1 = function () {
    return "Olá, Lucas"
}

console.log(showMessage1());

const showMessage2 = function (name, message) {
    return message + name
}
console.log((showMessage2("Ana", "Olá, ")));
*/
/*
const showMessage = () => {
    console.log("Olá");

}

console.log(showMessage);

showMessage()

const showMessage2 = (name, mail) => {
    console.log(`Olá, ${name}, seu novo email é ${mail}`);

}
showMessage2("Ana", "ana@email.com")
*/

function execute(taskName, callback) {
    console.log("Executando a tarefa: ", taskName);
    callback()
}

function callback() {
    console.log("Tarefa finaizada.");

}

execute("Download do arquivo...", callback)

execute("Upload do arquivo...", () => {
    console.log("Função de callback com uma arrow function");

})

execute("Excluindo arquivo", function () {
    console.log("Arquivo excluido");

})


execute("Salvando arquivo", () => console.log("Arquivo salvo"))





