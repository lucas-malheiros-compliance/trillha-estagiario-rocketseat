import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Configurando a data padrão e a data mínima
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        const name = clientName.value.trim()
        if (!name) {
            return alert("Informe o nome do cliente!")
        }

        const hourSelected = document.querySelector(".hour-selected")
        if (!hourSelected) {
            return alert("Selecione a hora!")
        }

        const [hour] = hourSelected.innerText.split(":")

        const when = dayjs(selectedDate.value).add(hour, "hour")

        const id = new Date().getTime()

        await scheduleNew(
            {
                id,
                name,
                when
            }
        )

        await schedulesDay()
        clientName.value = ""

    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }

}