// Cotação de moedas do dia
const USD = 4.94
const EUR = 5.78
const GBP = 6.70

const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente número
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }

}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula total
        let total = amount * price

        // Verifica se o resutado não é um número
        if (isNaN(total)) {
            return ("Por favor digite o valor corretamente para converter!")
        }

        // Formatar o valor tota.
        result.textContent = `${formatCurrencyBRL(total).replace("R$", "")} Reais`

        footer.classList.add("show-result")
    } catch (error) {
        // Remove a classe do footer revomento ele da tela
        footer.classList.remove("show-result")
        console.log(error);
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

// Formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}