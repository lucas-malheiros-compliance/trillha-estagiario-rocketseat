/*
let exercute = true
let cont = 0;
while (execute) {
    let response = window.prompt("Deseja continuar? SIM(1) ou NÂO (2)")
    if (response === "2") {
        exercute = false
    }
    console.log(`Programa resetado ${cont + 1} vezes`);
    cont++
}
console.log("Loop finalizado, segue fluxo");
*/
/*
let value = true

while(value){
    console.log("Executando while...");    
}
*/
/*
let value = 0
do {
    value++
    console.log(value);

} while (value < 10)

console.log("Segue fluxo...");
*/
/*
for (let step = 0; step < 10; step++) {
    console.log(step);
}

let number = 7
console.log("Tabuada do " + number);

for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
*/
/*
let person = {
    name: "Lucas",
    surname: "Malheiros",
    email: "lucas@email.com"
}

for (let property in person) {
    //exibe o nome da propriedade
    console.log(property);
    //exibe o conteudo dap ropriedade
    console.log(person[property]);
}

let students = ["Lucas", "Rodrigo", "João", "Amanda"]

for (const index in students) {

    console.log(students[index])
}
*/
/*
let students = ["Lucas", "Rodrigo", "Amanda"]

for (let student of students) {
    console.log(student);
}

let user = [{
    name: "Lucas",
    email: "email@email.com"
}]

for (let value of user) {
    console.log(value);
}
*/
/*
let option = 3
switch (option) {
    case 1:
        console.log("Cadastrar");

        break;
    case 2:
        console.log("Atualizar");

        break;
    case 3:
        console.log("Remover");

        break;
    default:
        console.log("Opção inválida");

        break;
}

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i)
}
    */

for (let i = 0; i < 10; i++) {
    if (i == 5)
        continue
    console.log((i));

}





