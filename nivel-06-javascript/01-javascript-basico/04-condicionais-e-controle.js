/*
let idade = 16

console.log(idade >= 18 ? "Você pode dirigir" : "Você não pode dirigir");

console.log("-----");
idade = 21
console.log(idade >= 18 ? "Você pode dirigir" : "Você não pode dirigir");
console.log("-----");
console.log(idade < 18 ? "Você não pode dirigir" : "Você pode dirigir");
*/
/*
console.log(false ? "Verdadeiro" : "Falso");
console.log(0 ? "Verdadeiro" : "Falso");
console.log("" ? "Verdadeiro" : "Falso");
console.log(null ? "Verdadeiro" : "Falso");
console.log(undefined ? "Verdadeiro" : "Falso");
console.log(NaN ? "Verdadeiro" : "Falso");
console.log("-----")
console.log(true ? "Verdadeiro" : "Falso");
console.log({} ? "Verdadeiro" : "Falso");
console.log([] ? "Verdadeiro" : "Falso");
console.log(1 ? "Verdadeiro" : "Falso");
console.log("teste" ? "Verdadeiro" : "False");
*/
/*
let hour = 18
if (hour < 12) {
    console.log("Bom dia");
} else if (hour >= 12 && hour < 18) {
    console.log("Boa tarde");

} else {
    console.log("Boa noite");
}
*/
/*
let option = 1
switch (option) {
    case 1:
        console.log("Consultar");
        break;
    case 2:
        console.log("Falar com atendente");
        break;
    case 3:
        console.log("Cancelar pedido");
        break
    default:
        console.log("Opção inválida");
        
}
*/
/*
try {
    console.log(result);
} catch (error) {
    console.log(error)
} finally {
    console.log("Fim do programa");

}
*/
let result = 0
try {
    if (result === 0) {
        throw new Error("O valor é igual a zero");
    }
} catch (error) {
    console.log(error.message);

} finally {
    console.log("Fim");

}