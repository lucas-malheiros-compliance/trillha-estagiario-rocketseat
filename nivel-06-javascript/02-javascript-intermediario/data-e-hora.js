let date = new Date("2026-05-02T14:30:15")

/*
console.log(new Date());
console.log(new Date(0));
// numero de milissegundos
console.log(new Date().getTime());
*/

/*
console.log(new Date(2025, 4, 2));
console.log(new Date(2025, 4, 2, 13, 40, 0));
console.log(new Date("2025-05-02T14:30:30"));
console.log(new Date("May 2, 2025, 13:30:00"));

*/
/*
let date = new Date("2025-05-02T13:45:30")

console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds);
*/
/*
let date = new Date("July 3, 2024 14:30:00")

date.setFullYear(2030)
date.setMonth(1)
date.setDate(10)

date.setHours(18)
date.setMinutes(15)
date.setSeconds(33)
console.log(date);
*/
/*
let date = new Date("2024-07-02T14:30:00")
let day = date.getDate().toString().padStart(2, "0")
console.log(day);
let month = (date.getMonth() + 1).toString().padStart(2, "0")
console.log(month);

let year = date.getFullYear()
let hour = date.getHours
let minute = date.getMinutes()

console.log(`${day}/${month}/${year}`);
*/
/*
let date = new Date("2025-05-02T14:30:00")

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
*/
/*
let date = new Date("2025-05-02T14:30:15")
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString("En"));
*/
/*
console.log(date.toLocaleString());
console.log(date.toLocaleString("en"));
console.log(date.toLocaleString("pt-br", {
    dateStyle: "short",
}));
console.log(date.toLocaleString("pt-br", {
    dateStyle: "long",
}));
console.log(date.toLocaleString("pt-br", {
    dateStyle: "medium",
}));
console.log(date.toLocaleString("pt-br", {
    dateStyle: "full",
}));

console.log(date.toLocaleString("pt-br", {
    date: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
}));

let amount = 12.5
console.log(amount.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl"
}));
*/
/*
// informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale);

// exibe no formato da localidade informada
console.log(new Intl.DateTimeFormat("pt-br").format(new Date()));
console.log(new Intl.DateTimeFormat("en").format(new Date()));

console.log(date.getTimezoneOffset());
console.log(date.getTimezoneOffset() / 60);
*/

const dateWithTimeZone = new Date("2026-05-07T17:19:20.561+03:00")
// console.log(dateWithTimeZone.toISOString());
console.log(dateWithTimeZone.toLocaleString());











