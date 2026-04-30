
/*console.log(document)
console.log(document.title)
const guest = document.getElementById("guest-2")
console.log(guest);
console.dir(guest)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass);
console.log(guestsByClass.item(1));
console.log(guestsByClass[0]);
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag);
*/
/*
const guest = document.querySelector("#guest-1")
console.log(guest);
//const guests = document.querySelector(".guest")
//console.log(guests);
const guests = document.querySelectorAll(".guest")
console.log(guests);
*/
/*
const guest = document.querySelector("#guest-1")
//const guest = document.querySelector("#guest-1 span")
console.log(guest.textContent);
//guest.textContent = "Lucas m"
//console.log(gues);
console.log(guest.innerText);
console.log(guest.innerHTML);
*/
/*
const input = document.querySelector("#name")
// input.classList.add("input-error")
// input.classList.remove("input-error")
// input.classList.toggle("input-error")
const button = document.querySelector("button")
button.style.backgroundColor = "red"
*/
/*
const guests = document.querySelector("ul")
const newGuest = document.createElement("li")
newGuest.classList.add("guest")
const guestName = document.createElement("span")
guestName.textContent = "Diego"
// newGuest.append(guestName)
const guestSurname = document.createElement("span")
guestSurname.textContent = "Fernandes"
// newGuest.append(guestSurname)
// newGuest.append(guestName, guestSurname)
// const guestSurname2 = document.createElement("span")
// guestSurname2.textContent = "Fernandes"
// newGuest.prepend(guestSurname2)
newGuest.appendChild(guestName)
guests.append(newGuest)
console.log(newGuest);
*/
/*
const input = document.querySelector("input")
// input.setAttribute("disabled", true)
// input.setAttribute("type", "file")
// input.removeAttribute("id")
*/
/*
window.addEventListener("load", () => {
    console.log(("A página foi carregada"));
})
addEventListener("click", (e) => {
    e.preventDefault()
    // console.log(e);
    console.log(e.target);
    console.log(e.target.textContent);
})
*/
/*
const ul = document.querySelector("ul")
ul.addEventListener("scroll", (e) => {
    // console.log(ul.scrollTop);
    if (ul.scrollTop > 300) {
        // console.log("Fim da lista");
        ul.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
})
const button = document.querySelector("button")
button.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Clicou");
})
*/
/*
const form = document.querySelector("form")
form.onsubmit = (e) => {
    e.preventDefault()
    console.log("Você fez submit no formulário #1");
}
form.onsubmit = (e) => {
    e.preventDefault()
    console.log("Você fez submit no formulário #2");
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Você fez submit no formulário #3");
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Você fez submit no formulário #4");
})
*/
/*
const input = document.querySelector("input")
// input.addEventListener("keydown", (e) => {
//     console.log(e.key);
// })
input.addEventListener("keypress", (e) => {
    console.log(e);
})
input.onchange = (e) => inputChange()
function inputChange() {
    console.log("O input mudou");
}
*/
/*
const input = document.querySelector("input")
input.addEventListener("input", (e) => {
    value = input.value
    const regex = /\D+/g
    //console.log(value.match(regex));
    // const isValid = regex.test(value)
    // console.log(isValid);
})

const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const regex = /\D+/g
    // const value = input.value.replace(regex, "")
    // console.log(value);
    const value = input.value
    if (regex.test(value)) {
        console.log(value);

    } else {

        alert("Valor inválido")
    }
})*/

// CONTEÚDO DE DE BUGGING!
const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault()

    const value = input.value
    const regexHasNumber = /\d+/g

    if (regexHasNumber.test(value)) {
        alert("O texto contém números. Por favor, digite corretamente.")
    } else {
        alert("Enviado")
    }

}