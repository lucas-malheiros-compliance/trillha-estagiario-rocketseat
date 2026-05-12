/*
setTimeout(() => {
    console.log("Olá, tudo bem?");

}, 5000)
*/
/*
let value = 10
const interval = setInterval(() => {
    console.log(value)
    value--

    if (value < 0) {
        console.log("Feliz ano novo!")
        clearInterval(interval)
    }
}, 1000);
*/
/*
function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const isSuccess = false

            if (isSuccess) {
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Algo deu errado!")
            }
        }, 3000);
    })
}

// async function fetch() {
//     const response = await asyncFunction()
//     console.log(response)

// }

const fetch = async () => {
    try {
        const response = await asyncFunction()
        console.log(response)
    } catch (error) {
        console.log(("Erro: ", error));
    } finally {
        console.log("Operação concluída");
    }
}
fetch()
*/

// 1 é impresso imedediatamente no console
console.log(1)

// são executadas antes de temporizadores e promises
queueMicrotask(() => {
    console.log(2)
})

// ultima coisa a ser executada pois é Macrotask
setTimeout(() => {
    console.log(3);

}, 1000);

// exercução sincrona, logo após o 1
console.log(4);


Promise.resolve(true).then(() => {
    console.log(5);

})