import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"
import { schedulesDay } from "../schedules/load.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {

    hours.innerHTML = ""

    const unavaliableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const avaliable = !unavaliableHours.includes(hour) && !isHourPast

        return {
            hour,
            avaliable
        }

    })

    opening.forEach(({ hour, avaliable }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(avaliable ? "hour-available" : "hour-unavailable")
        li.textContent = hour

        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00")
            hourHeaderAdd("Noite")
        hours.append(li)
    })

    hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}