// seleciona os elementos o furmulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// seleciona os ementos doa lista
const expenseList = document.querySelector("ul")
const expensesTotal = document.querySelector("aside header h2")
const expensesQuantity = document.querySelector("aside header p span")


//captura o evento do input e formata o valor no formato de real
amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "")
    value = Number(value) / 100
    amount.value = FormatCurrencyBrl(value)
}

function FormatCurrencyBrl(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    return value
}

form.onsubmit = (e) => {
    e.preventDefault()

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    expenseAdd(newExpense)
}

function expenseAdd(newExpense) {
    try {
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        const expenseInfo = document.createElement("div")
        expenseInfo.classList.add("expense-info")

        const expenseName = document.createElement("strong")
        expenseName.textContent = newExpense.expense

        const expenseCategory = document.createElement("span")
        expenseCategory.textContent = newExpense.category_name

        expenseInfo.append(expenseName, expenseCategory)

        const expenseAmount = document.createElement("span")
        expenseAmount.classList.add("expense-amount")
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`

        const removeIcon = document.createElement("img")
        removeIcon.classList.add("remove-icon")
        removeIcon.setAttribute("src", "img/remove.svg")
        removeIcon.setAttribute("alt", "remover")

        // adiciona informações no item
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

        expenseList.append(expenseItem)

        formClear()

        updateTotals()
    } catch (error) {
        console.log(error)
        alert("Não foi possível atualizar a lista de despesas")

    }
}

function updateTotals() {
    try {
        const items = expenseList.children

        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`

        let total = 0

        for (let item = 0; item < items.length; item++) {
            const itemAmount = items[item].querySelector(".expense-amount")

            let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".")

            value = parseFloat(value)

            if (isNaN(value)) {
                return alert("Não foi possível calcular o total. O valor não parece ser um numero")

            }
            total += Number(value)
        }

        const symbolBrl = document.createElement("small")
        symbolBrl.textContent = "R$"
        total = FormatCurrencyBrl(total).toUpperCase().replace("R$", "")
        expensesTotal.innerHTML = ""
        expensesTotal.append(symbolBrl, total)
    } catch (error) {
        console.log(error)
        alert("Não foi possível atualizar os totais")
    }
}

expenseList.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-icon")) {
        const item = e.target.closest(".expense")
        item.remove()
    }
    updateTotals()
})

function formClear() {
    expense.value = ""
    category.value = ""
    amount.value = ""

    expense.focus()
}